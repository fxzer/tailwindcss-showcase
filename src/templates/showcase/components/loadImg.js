// 将所有图片导入进来
const req1 = import.meta.globEager('./img/*.*', {eager: true})

const req = {...req1 }

const imagesMap = {}

// 循环所有图片，将图片名设置成键，值为导入该图片的地址
for (const key in req) {
    // let name = key.replace(/(\.\/images\/|\..*)/g, '')
    let name =key.split('/').slice(-1)[0].split('.')[0]

    // 抛出图片大对象后，文件页面直接引入后将图片的具体名称作为属性就能导入该图片
    imagesMap[name] = req[key].default
}

export default imagesMap