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
var canvasin = document.getElementById('gbr-zoom-can');
var ctxin = canvasin.getContext('2d');
var imagein = new Image();
var imgmatrxin; //current image
var imgmatrx_oriin; //original imag
var ggl = document.getElementById('gagal');
document.getElementById('gambar1').onclick = flipy;
document.getElementById('gambar2').onclick = flipy2;
document.getElementById('gambar3').onclick = flipy3;
document.getElementById('gambar4').onclick = flipy4;
document.getElementById('submit').onclick = cocok;
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

    var image5 = document.getElementById('gambarbenar2');

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

    var image6 = document.getElementById('gambarbenar4');

    canvas6.width = image6.width;
    canvas6.height = image6.height;
    ctx6.drawImage(image6, 0, 0);
    imgmatrx6 = nj.images.read(image6);

    imgmatrx_ori6 = imgmatrx6;
    image6.style.display="none";
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
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n;
    var z_dim = 1;
    if (isrgb) {
        z_dim = isrgb; // utk rgba
    }
    
    k = 0;
    l = 0;
    m = 0;
    n = 0;
    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    //z = r nya brp, g brp, b brp, a brp 
                    a = imgmatrx2.get(y,x,z);
                     // alert(a);
                    //  if(x==441){
                    //      alert(a);
                    // }
                    b = imgmatrx.get(y,x,z);
                    c = imgmatrx3.get(y,x,z);
                    d = imgmatrx4.get(y,x,z);
                    e = imgmatrx5.get(y,x,z);
                    f = imgmatrx6.get(y,x,z);
                    // alert(b);
                    g = b - f;
                    h = a - a;
                    i = c - c;
                    j = d - e;
                    // // alert(c);
                    // flipped.set(y,x,z,imgmatrx2.get(y,x,c));
                    k = k + g;
                    l = l + h;
                    m = m + i;
                    n = n + j;

                     if(y==shape[0]-1 && x==shape[1]-1 && z == z_dim-1 && k == 0 && l == 0 && m == 0 && n == 0){
                         
                            window.location.replace("home2.php");
                        
                    }
                     if(g !=0 || h != 0 || i != 0 || j != 0){
                         // alert("salah");
                         // alert(g);
                         // alert(b);
                         // alert(f);
                         // alert(y);
                         // alert(x);
                         ggl.setAttribute('class', 'fade in');
                         break;
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
function flipx(){
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
                    flipped.set(shape[0]-y-1,x,z,imgmatrx.get(y,x,z))
                } else {
                    flipped.set(shape[0]-y-1,x,imgmatrx.get(y,x))                    
                }
            }
        }
    }

    imgmatrx = flipped;
    nj.images.save(imgmatrx,canvas)

}

