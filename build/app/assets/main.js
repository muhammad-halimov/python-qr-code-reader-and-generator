async function generator_js()
{
    var path = document.getElementById('message').value;

    if (!path)
    {
        alert('Поле пустое !');
        return window.location.reload();
    }
    else
    {
        await eel.generator(path)();
        alert('Послание кодифицировано !');
        return window.location.reload();
    }
}

async function reader_js()
{
    var info = document.getElementById('chosen').value.replace(/^.*\\/,"");
    var info2 = document.getElementById('field').value.replace(/^.*\\/,"");

    if (!info && !info2)
    {
        alert('Поле пустое, либо вы ничего не выбрали !');
        return window.location.reload();
    }
    else if (!info)
    {
        var result1 = await eel.reader(info2)();
        alert('Послание прочитано ! Оно появиться в самом низу приложения.');
        document.getElementById('result').innerHTML = result1;

    }
    else
    {
        var result2 = await eel.reader(info)();
        alert('Послание прочитано ! Оно появиться в самом низу приложения.');
        document.getElementById('result').innerHTML = result2;
    }
}