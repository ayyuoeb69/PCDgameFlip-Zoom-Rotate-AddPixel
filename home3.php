<?php 
include_once "view/header.php";
?>

<script src="assets/num.js"></script>

<div id="bg-l3">
    <div class="box-bungkus" >
        <h1 class="lvl-jdl" style="float: left;">Level 3</h1>
        <button id="hint-btn" class="btn btn-info" style="font-weight: bold;float: right;margin-top: 20px" data-toggle="modal" data-target="#hint"><span class="glyphicon glyphicon-question-sign" style="margin-right:5px"></span>HINT</button>
        <div style="clear: both">       
            <p style="font-size: 20px;float: left;color: #0087C9"><b style="margin-right:5px">Waktu Sisa :</b></p><progress value="0" max="10" id="progressBar" style="width: 81%; position: relative;top:7px"></progress>

        </div>
        <div style="clear: both">
            <div class="bks-img" style="width: 500px">
                <div style="clear: both;"></div>
                <canvas id="gambar1" class="img-puz"></canvas>
                <canvas id="gambar2" class="img-puz"></canvas>
                <canvas id="gambar3" class="img-puz"></canvas>
                <div style="clear: both;"></div>
                <canvas id="gambar4" class="img-puz"></canvas>
                <canvas id="gambar5" class="img-puz"></canvas>
                <canvas id="gambar6" class="img-puz"></canvas>
                <div style="clear: both;"></div>
                <canvas id="gambar7" class="img-puz" style="display: none"></canvas>
                <canvas id="gambar8" class="img-puz" style="display: none"></canvas>
                <div style="clear: both;"></div>
                <canvas id="gambar9" class="img-puz" style="display: none"></canvas>
                <canvas id="gambar10" class="img-puz" style="display: none"></canvas>
                <canvas id="gambar11" class="img-puz" style="display: none"></canvas>
                <canvas id="gambar12" class="img-puz" style="display: none"></canvas>
            </div>
        </div>
        <button id="submits" class="menu" style="margin-top: 80px;font-size: 18px;padding:4px 18px 10px 18px;"><span class="glyphicon glyphicon-ok" style="margin-right: 5px;position: relative;top:2px;"></span>SUBMIT</button>
    </div>
    <img id="gambarori" src="view/image/imagebenar31.png" class="img-puz" onload="loadgambar()" style="display: none">
    <img id="gambarori2" src="view/image/imagebenar32.png" class="img-puz" onload="loadgambar2()" style="display: none">
    <img id="gambarori3" src="view/image/imagebenar33.png" class="img-puz" onload="loadgambar3()" style="display: none">

    <img id="gambarori4" src="view/image/imagebenar34.png" class="img-puz" onload="loadgambar4()" style="display: none">
    <img id="gambarori5" src="view/image/imagebenar35.png" class="img-puz" onload="loadgambar5()" style="display: none">
    <img id="gambarori6" src="view/image/imagebenar36.png" class="img-puz" onload="loadgambar6()" style="display: none">


    <img id="gambarbenar" src="view/image/imagebenar31.png" class="img-puz" onload="loadgambar7()" style="display: none">
    <img id="gambarbenar2" src="view/image/imagebenar32.png" class="img-puz" onload="loadgambar8()" style="display: none">

    <img id="gambarbenar3" src="view/image/imagebenar33.png" class="img-puz" onload="loadgambar9()" style="display: none">
    <img id="gambarbenar4" src="view/image/imagebenar34.png" class="img-puz" onload="loadgambar10()" style="display: none">
    <img id="gambarbenar5" src="view/image/imagebenar35.png" class="img-puz" onload="loadgambar11()" style="display: none">
    <img id="gambarbenar6" src="view/image/imagebenar36.png" class="img-puz" onload="loadgambar12()" style="display: none">
    <div id="hint" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h2 class="modal-title" style="color:color: #edd02f;text-align: center;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: #e7d98d;">Gambar Asli</h2>
                </div>
                <div class="modal-body" style="text-align: center">
                    <canvas id="gbr-zoom-can"></canvas>
                    <img id="gbr-zoom" src="view/image/i.png" onload="loadgambarin()" style="display: none"><br>
                    <br>
                    <button id="btn-zoomin" class="btn btn-warning"><span class="glyphicon glyphicon-zoom-in" style="margin-right: 5px"></span>Zoom In</button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>
    <div id="gagal" class="modal fade" role="dialog" >
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content" style="overflow: auto;">
                <div class="modal-body">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-8" style="text-align: center">
                        <h1 style="font-family: myf;color:red;font-size: 60px;">GAME OVER</h1>
                        <br>
                        <br>
                        <img src="view/image/path117.png" class="img-responsive" style="margin-bottom: 30px">
                        <form action="home.php" method="POST" style="text-align: left;">
                            <label>Nama : </label>
                            <input type="text" name="nama" style="width: 80%" required>
                            <br>
                            <br><!-- 
                            <label style="float: left;">Foto: </label>
                            <input type="file" name="foto" required style="margin-right: auto;margin-left: auto;" >
                            <br>
                            <br>
                            <div style="clear: both;"></div>
                            <input placeholder="Berapa Derajat Rotasi" type="number" class="form-control" id="val">
                            <br>
                            
                            <button class="btn btn-default">Rotasi</button>

 -->
                            <br>
                            <br>
                            <div style="text-align: center;overflow: auto;">
                            <button id="btnrot" class="btn btn-danger" style="font-weight: bold;margin-bottom: 40px;">OKEY</button>
                        </div>
                        </form>
                    </div>
                    <div class="col-sm-2">
                    </div>
                </div>

        </div>
    </div>
</div>
</div>
<script src="utils.js"></script>
<script src="app3.js"></script>
<script type="text/javascript">
    var timeleft = 10;
    var ggl = document.getElementById('gagal');
        var downloadTimer = setInterval(function(){
        document.getElementById("progressBar").value = 10 - --timeleft;
        if(timeleft <= 0){
            ggl.setAttribute('class', 'fade in');
            
        }
    },4000);
</script>
<?php 
include_once "view/footer.php";
?>