
const SERVERURL='http://localhost:3406/';

const URL ={
    getTypes:SERVERURL+'type/getTypes',
    increaseType:SERVERURL+'tstype/increaseType',
    getgeren:SERVERURL+'user/getgeren',
    //待会要写gettypes方法还没写
    getmusic:SERVERURL+'musiclist/getmusic',
    getDetail:SERVERURL+'musiclist/getDetail',
    
increasest:SERVERURL+'musiclist/increasest',
    getTstypes:SERVERURL+'tstype/getTstypes',
    
    delectuser:SERVERURL+'user/delectuser',
 
    getuser:SERVERURL+'user/getuser',

    addwant:SERVERURL+'cart/addwant',
    getwant:SERVERURL+'cart/getwant',

    updateUser:SERVERURL+'user/updateUser',
    increaseComment:SERVERURL+'comment/increaseComment',
 getComment:SERVERURL+'comment/getComment',
getTesttysone:SERVERURL+'testty/getTesttysone',
// getTesttystwo:SERVERURL+'testty/getTesttystwo',
// getTesttysthree:SERVERURL+'testty/getTesttysthree',
// getTesttysfour:SERVERURL+'testty/getTesttysfour',
// getTesttysfine:SERVERURL+'testty/getTesttysfine',

getproducta:SERVERURL+'product/getproducta',
// getproductb:SERVERURL+'product/getproductb',
// getproductc:SERVERURL+'product/getproductc',
// getproductd:SERVERURL+'product/getproductd',
// getproducte:SERVERURL+'product/getproducte',
increaseTesttys:SERVERURL+'testty/increaseTesttys',

increaseScore:SERVERURL+'score/increaseScore',
getScore:SERVERURL+'score/getScore',
 
getAd:SERVERURL+'ad/getAd',
getAdComment:SERVERURL+'ad/getAdComment',
increaseAd:SERVERURL+'ad/increaseAd',

getTesttyss:SERVERURL+'testty/getTesttyss', 

 loginUser:SERVERURL+'user/loginUser',
 del:SERVERURL+'user/del',
    registUser:SERVERURL+'user/registUser'//是指user这个文件下面有个registUser这个方法

};
export default URL;