from eel import init, start, expose
init('app')


@expose
def generator(data):
    import qrcode
    img = qrcode.make(data)

    return img.save('qr.png')


@expose
def reader(path):
    import cv2

    img = cv2.imread(path)
    detector = cv2.QRCodeDetector()
    data, bbox, straight_qrcode = detector.detectAndDecode(img)

    with open('components/temp.txt', 'w', encoding = 'utf-8') as file:
        file.write(data)

    with open('components/temp.txt', 'r', encoding = 'utf-8') as file:
        readed = file.read()

    return readed


start('main.htm', size=(576, 640))