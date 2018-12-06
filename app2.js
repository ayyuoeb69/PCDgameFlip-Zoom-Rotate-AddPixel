var canvas = document.getElementById('gambar1');
var ctx = canvas.getContext('2d');
var image = new Image();
var imgmatrx; //current image
var imgmatrx_ori; //original image
var canvas2 = document.getElementById('gambar2');
var ctx2 = canvas2.getContext('2d');
var image2 = new Image();
var imgmatrx2; //current image
var imgmatrx_ori2; //original image
var canvas3 = document.getElementById('gambar3');
var ctx3 = canvas3.getContext('2d');
var image = new Image();
var imgmatrx3; //current image
var imgmatrx_ori3; //original image
var canvas4 = document.getElementById('gambar4');
var ctx4 = canvas4.getContext('2d');
var image4 = new Image();
var imgmatrx4; //current image
var imgmatrx_ori4; //original image
var canvas5 = document.getElementById('gambar5');
var ctx5 = canvas5.getContext('2d');
var image5 = new Image();
var imgmatrx5; //current image
var imgmatrx_ori5; //original image
var canvas6 = document.getElementById('gambar6');
var ctx6 = canvas6.getContext('2d');
var image6 = new Image();
var imgmatrx6; //current image
var imgmatrx_ori6; //original image
var canvas7 = document.getElementById('gambar7');
var ctx7 = canvas7.getContext('2d');
var image7 = new Image();
var imgmatrx7; //current image
var imgmatrx_ori7; //original image
var canvas8 = document.getElementById('gambar8');
var ctx8 = canvas8.getContext('2d');
var image8 = new Image();
var imgmatrx8; //current image
var imgmatrx_ori8; //original image
var canvas9 = document.getElementById('gambar9');
var ctx9 = canvas9.getContext('2d');
var image9 = new Image();
var imgmatrx9; //current image
var imgmatrx_ori9; //original image
var canvas10 = document.getElementById('gambar10');
var ctx10 = canvas10.getContext('2d');
var image10 = new Image();
var imgmatrx10; //current image
var imgmatrx_ori10; //original image
var canvas11 = document.getElementById('gambar11');
var ctx11 = canvas11.getContext('2d');
var image11 = new Image();
var imgmatrx11; //current image
var imgmatrx_ori11; //original image
var canvasin = document.getElementById('gbr-zoom-can');
var ctxin = canvasin.getContext('2d');
var imagein = new Image();
var imgmatrxin; //current image
var imgmatrx_oriin; //original imag
var ggl = document.getElementById('gagal');
document.getElementById('gambar1').onclick = flipy;
document.getElementById('gambar2').onclick = flipx2;
document.getElementById('gambar3').onclick = flipy3;
document.getElementById('gambar4').onclick = flipy4;
document.getElementById('gambar5').onclick = flipx5;
document.getElementById('gambar6').onclick = flipx6;
document.getElementById('submits').onclick = cocok;
document.getElementById('btn-zoomin').onclick = zoomin;
document.getElementById('hint-btn').onclick = hilang;

function hilang() {
    var hint = document.getElementById('hint-btn'); 
    hint.style.display="none";

}
function loadgambarin() {
    console.log("image loaded");
    // clear()

    var imagein = document.getElementById('gbr-zoom');

    canvasin.width = imagein.width;
    canvasin.height = imagein.height;
    ctxin.drawImage(imagein, 0, 0);
    imgmatrxin = nj.images.read(imagein);
    imgmatrx_oriin = imgmatrxin;
 
};

function loadgambar() {
    console.log("image loaded");
    // clear()

    var image = document.getElementById('gambarori');

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    imgmatrx = nj.images.read(image);
    imgmatrx_ori = imgmatrx;
    image.style.display="none";
 
};

function loadgambar2() {
    console.log("image loaded");
    // clear()

    var image2 = document.getElementById('gambarori2');

    canvas2.width = image2.width;
    canvas2.height = image2.height;
    ctx2.drawImage(image2, 0, 0);
    imgmatrx2 = nj.images.read(image2);

    imgmatrx_ori2 = imgmatrx2;
    image2.style.display="none";
};
function loadgambar3() {
    console.log("image loaded");
    // clear()

    var image3 = document.getElementById('gambarori3');

    canvas3.width = image3.width;
    canvas3.height = image3.height;
    ctx3.drawImage(image3, 0, 0);
    imgmatrx3 = nj.images.read(image3);
    imgmatrx_ori3 = imgmatrx3;
    image3.style.display="none";
 
};

function loadgambar4() {
    console.log("image loaded");
    // clear()

    var image4 = document.getElementById('gambarori4');

    canvas4.width = image4.width;
    canvas4.height = image4.height;
    ctx4.drawImage(image4, 0, 0);
    imgmatrx4 = nj.images.read(image4);

    imgmatrx_ori4 = imgmatrx4;
    image4.style.display="none";
};
function loadgambar5() {
    console.log("image loaded");
    // clear()

    var image5 = document.getElementById('gambarori5');

    canvas5.width = image5.width;
    canvas5.height = image5.height;
    ctx5.drawImage(image5, 0, 0);
    imgmatrx5 = nj.images.read(image5);

    imgmatrx_ori5 = imgmatrx5;
    image5.style.display="none";
};
function loadgambar6() {
    console.log("image loaded");
    // clear()

    var image6 = document.getElementById('gambarori6');

    canvas6.width = image6.width;
    canvas6.height = image6.height;
    ctx6.drawImage(image6, 0, 0);
    imgmatrx6 = nj.images.read(image6);

    imgmatrx_ori6 = imgmatrx6;
    image6.style.display="none";
};
function loadgambar7() {
    console.log("image loaded");
    // clear()

    var image7 = document.getElementById('gambarbenar2');

    canvas7.width = image7.width;
    canvas7.height = image7.height;
    ctx7.drawImage(image7, 0, 0);
    imgmatrx7 = nj.images.read(image7);

    imgmatrx_ori7 = imgmatrx7;
    image7.style.display="none";
};
function loadgambar8() {
    console.log("image loaded");
    // clear()

    var image8 = document.getElementById('gambarbenar3');

    canvas8.width = image8.width;
    canvas8.height = image8.height;
    ctx8.drawImage(image8, 0, 0);
    imgmatrx8 = nj.images.read(image8);

    imgmatrx_ori8 = imgmatrx8;
    image8.style.display="none";
};
function loadgambar9() {
    console.log("image loaded");
    // clear()

    var image9 = document.getElementById('gambarbenar4');

    canvas9.width = image9.width;
    canvas9.height = image9.height;
    ctx9.drawImage(image9, 0, 0);
    imgmatrx9 = nj.images.read(image9);

    imgmatrx_ori9 = imgmatrx9;
    image9.style.display="none";
};
function loadgambar10() {
    console.log("image loaded");
    // clear()

    var image10 = document.getElementById('gambarbenar5');

    canvas10.width = image10.width;
    canvas10.height = image10.height;
    ctx10.drawImage(image10, 0, 0);
    imgmatrx10 = nj.images.read(image10);

    imgmatrx_ori10 = imgmatrx10;
    image10.style.display="none";
};
function loadgambar11() {
    console.log("image loaded");
    // clear()

    var image11 = document.getElementById('gambarbenar6');

    canvas11.width = image11.width;
    canvas11.height = image11.height;
    ctx11.drawImage(image11, 0, 0);
    imgmatrx11 = nj.images.read(image11);

    imgmatrx_ori11 = imgmatrx11;
    image11.style.display="none";
};

function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

// function openfile(e) {
//     var files = e.files;
//     if (!files.length) return;
//     image.src = URL.createObjectURL(files[0])
// }

// *
// *
// Basic Operation  
// *
// *
function cocok(){
    var flipped = nj.zeros(imgmatrx.shape);
    var shape = imgmatrx.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb; // utk rgba
    }
    
    r = 0;
    s = 0;
    t = 0;
    u = 0;
    v = 0;
    w = 0;
    

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    //z = r nya brp, g brp, b brp, a brp 
                    a = imgmatrx.get(y,x,z);
                     // alert(a);
                    //  if(x==441){
                    //      alert(a);
                    // }
                    b = imgmatrx2.get(y,x,z);
                    c = imgmatrx3.get(y,x,z);
                    d = imgmatrx4.get(y,x,z);
                    e = imgmatrx5.get(y,x,z);
                    f = imgmatrx6.get(y,x,z);
                     g = imgmatrx7.get(y,x,z);
                    h = imgmatrx8.get(y,x,z);
                    i = imgmatrx9.get(y,x,z);
                    j = imgmatrx10.get(y,x,z);
                    k = imgmatrx11.get(y,x,z);
                    // alert(b);
                    l = a - a;
                    m = b - g;
                    n = c - h;
                    o = d - i;
                    p = e - j;
                    q = f - k;
                    // // alert(c);
                    // flipped.set(y,x,z,imgmatrx2.get(y,x,c));
                    r = r + l;
                    s = s + m;
                    t = t + n;
                    u = u + o;
                    v = v + p;
                    w = w + q;
                    // alert(o);
                    // alert(u);
                    // alert(r);
                    // alert(s);
                    // alert(t);
                    // alert(u);
                    // alert(v);
                    // alert(w);
                    // if(y==shape[0]-1 && x==shape[1]-1 && z == z_dim-1){
                    //     alert("salah");
                    // // }
                    // if(y==shape[0]-2 && x==shape[1]-2 && z == z_dim-2){
                    //     alert("salah");
                    // }

                     if(y==shape[0]-1 && x==shape[1]-1 && z == z_dim-1 && r == 0 && s == 0 && t == 0 && u == 0 && v == 0 && w == 0){
                         
                            window.location.replace("home3.php");
                        
                    }
                     if(r !=0 || s != 0 || t != 0 || u != 0 || v != 0|| w != 0){
                         // alert("salah");
                         // alert(g);
                         // alert(b);
                         // alert(f);
                         // alert(y);
                         // alert(x);
                         ggl.setAttribute('class', 'fade in');
                         break;
                    //      alert(c);
                    //      alert(h);
                    //      alert(x);
                    //      alert(y);
                    //      alert(r);
                    // alert(s);
                    // alert(t);
                    // alert(u);
                    // alert(v);
                    // alert(w);
                     }
                    //     alert(y);
                    //     alert(x);
                    //     alert(a);
                    //     alert(b);
                    //     alert(z);
                    //     alert(c);
                    //     alert(flipped);
                     
                   
                // alert(imgmatrx2.get(0,441,1));
                    
            }
        }
     }
    // alert(flipped);
    //  alert(k);
    // // alert(l);
    // // alert(m);
    // // alert(n);
    // if(k == 0){
    //     // window.location.replace("home2.php");
    //     alert("betul");
            
    // }
}

function zoomin(){
    var n =2;
var size = imgmatrxin.shape;

    var zoomed = nj.zeros([
        Math.floor(size[0]*n),
        Math.floor(size[1]*n),
        size[2]]);

    var isrgb = size[2];
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb;
    } 
    var newsize = zoomed.shape;

    for (var y = 0; y < newsize[0]; y++){
        for (var x = 0; x < newsize[1]; x++){
            for (var z = 0; z < z_dim; z++){
                
                    zoomed.set(y,x,z,imgmatrxin.get(Math.floor(y/n),Math.floor(x/n),z))
                
            }
        }
    }
    canvasin.height = newsize[0];
    canvasin.width = newsize[1];
    imgmatrxin = zoomed;
    nj.images.save(zoomed,canvasin);
}
function flipy(){
    var flipped = nj.zeros(imgmatrx.shape);
    var shape = imgmatrx.shape;
    var isrgb = shape[2];
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                if (isrgb){
                    flipped.set(y,shape[1]-x-1,z,imgmatrx.get(y,x,z))
                } else {
                    flipped.set(y,shape[1]-x-1,imgmatrx.get(y,x))                    
                }
            }
        }
    }

    imgmatrx = flipped;
    nj.images.save(imgmatrx,canvas);

}
function plus(){
    var flipped = nj.zeros(imgmatrx2.shape);
    var shape = imgmatrx.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    var a, b;
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb; // utk rgba
    }
    var shape2 = imgmatrx2.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb2 = shape2[2];//mengambil angka 4
    
    var z_dim2 = 1;
    if (isrgb2) {
        z_dim2 = isrgb2; // utk rgba
    }
    
    var d = 0;
    for (var y = 0; y < shape2[0]; y++){
        for (var x = 0; x < shape2[1]; x++){
            for (var z = 0; z < z_dim2; z++){
                    //z = r nya brp, g brp, b brp, a brp 
                    a = imgmatrx2.get(y,x,z);
                     // alert(a);
                    //  if(x==441){
                    //      alert(a);
                    // }
                    b = imgmatrx.get(y,x,z);
                    // alert(b);
                    c = b-a;
                    // // alert(c);
                    // flipped.set(y,x,z,imgmatrx2.get(y,x,c));
                                     
                    // if(c!=0){
                    //     alert("salah");
                    //     alert(y);
                    //     alert(x);
                    //     alert(a);
                    //     alert(b);
                    //     alert(z);
                    //     alert(c);
                    //     alert(flipped);
                    // }

                // alert(imgmatrx2.get(0,441,1));
                    
            }
        }
     }
    // alert(flipped);
}
function flipy2(){
    var flipped = nj.zeros(imgmatrx2.shape);//array[000]
    var shape = imgmatrx2.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb; // utk rgba
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    //z = r nya brp, g brp, b brp, a brp 
                    flipped.set(y,shape[1]-x-1,z,imgmatrx2.get(y,x,z));
                    // alert(flipped.set(y,shape[1]-x-1,z,imgmatrx2.get(y,x,z)));
                    // alert(imgmatrx2.get(y,x,z));
            }
        }
    }

    imgmatrx2 = flipped;
    nj.images.save(imgmatrx2,canvas2);

}
function flipy3(){
    var flipped = nj.zeros(imgmatrx3.shape);//array[000]
    var shape = imgmatrx3.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb; // utk rgba
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    //z = r nya brp, g brp, b brp, a brp 
                    flipped.set(y,shape[1]-x-1,z,imgmatrx3.get(y,x,z));
                    // alert(flipped.set(y,shape[1]-x-1,z,imgmatrx2.get(y,x,z)));
                    // alert(imgmatrx2.get(y,x,z));
            }
        }
    }

    imgmatrx3 = flipped;
    nj.images.save(imgmatrx3,canvas3);

}
function flipy4(){
    var flipped = nj.zeros(imgmatrx4.shape);//array[000]
    var shape = imgmatrx4.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb; // utk rgba
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    //z = r nya brp, g brp, b brp, a brp 
                    flipped.set(y,shape[1]-x-1,z,imgmatrx4.get(y,x,z));
                    // alert(flipped.set(y,shape[1]-x-1,z,imgmatrx2.get(y,x,z)));
                    // alert(imgmatrx2.get(y,x,z));
            }
        }
    }

    imgmatrx4 = flipped;
    nj.images.save(imgmatrx4,canvas4);

}
function flipx2(){
    var flipped = nj.zeros(imgmatrx2.shape);
    var shape = imgmatrx2.shape;
    var isrgb = shape[2];
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
               
                    flipped.set(shape[0]-y-1,x,z,imgmatrx2.get(y,x,z))
               
            }
        }
    }

    imgmatrx2 = flipped;
    nj.images.save(imgmatrx2,canvas2);

}
function flipx5(){
    var flipped = nj.zeros(imgmatrx5.shape);
    var shape = imgmatrx5.shape;
    var isrgb = shape[2];
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
               
                    flipped.set(shape[0]-y-1,x,z,imgmatrx5.get(y,x,z))
               
            }
        }
    }

    imgmatrx5 = flipped;
    nj.images.save(imgmatrx5,canvas5);

}
function flipx6(){
    var flipped = nj.zeros(imgmatrx6.shape);
    var shape = imgmatrx6.shape;
    var isrgb = shape[2];
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
               
                    flipped.set(shape[0]-y-1,x,z,imgmatrx6.get(y,x,z))
               
            }
        }
    }

    imgmatrx6 = flipped;
    nj.images.save(imgmatrx6,canvas6);

}


