<?php 
include_once "view/header.php";
?>

<script src="assets/num.js"></script>

<div id="bg-l3">
    <div class="box-bungkus" >
        <h1 class="lvl-jdl" style="float: left;">Level #</h1>
        
        <div style="clear: both">       
            <p style="font-size: 20px;float: left;color: #0087C9"><b style="margin-right:5px">Waktu Sisa :</b></p><progress value="0" max="10" id="progressBar" style="width: 81%; position: relative;top:7px"></progress>

        </div>
        <div style="clear: both">
            <div class="bks-img" style="width: 500px;padding-top: 10px">
                <div style="clear: both;"></div>
                <h3 style="text-align: left;float: left;">Gambar Soal</h3>

                <h3 style="text-align: right;">Gambar Jawaban</h3>
                <canvas id="gambar1" class="img-puz3"></canvas>
                <canvas id="gambar2" class="img-puz3" style="margin-left: 100px"></canvas>
            </div>
        </div>
        <div style="height: 260px;width: 3px;background-color: #edd02f;margin-left: auto;margin-right:auto;"></div>
        <div style="clear: both">
        </div>
        <h4 style="color: #366C98;font-family: sans-serif;font-weight: bold">Buatlah Gambar Jawaban Seperti Gambar Soal. Dengan Mengisikan Derajat Kemiringan Untuk Gambar Jawaban. <h5><i>Anda Hanya Memiliki 2 Kali Kesempatan</i></h5></h4>
        <div style="clear: both">
        </div>
        <div style="float: left; margin: 0 auto;text-align: center;padding-left: 0px" align="center" class="col-md-4">
            <input placeholder="nilai untuk operasi" type="number" class="form-control" id="val" ></div><button id="btnrot" style="display: inline;float: left;position: relative;top:5px">Rotasi</button>
        
        <div style="clear: both">
        </div>
        <button id="submits" class="menu" style="margin-top: 50px;font-size: 18px;padding:4px 18px 10px 18px;"><span class="glyphicon glyphicon-ok" style="margin-right: 5px;position: relative;top:2px;"></span>SUBMIT</button>
    </div>
    <img id="gambarori" src="view/image/g.png" class="img-puz3" onload="loadgambar()" style="display: none">
    <img id="gambarori2" src="view/image/g.png" class="img-puz3" onload="loadgambar2()" style="display: none">
    
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
<script src="app3.js"></script>
<script type="text/javascript">
    var timeleft = 10;
    var ggl = document.getElementById('gagal');
        var downloadTimer = setInterval(function(){
        document.getElementById("progressBar").value = 10 - --timeleft;
        if(timeleft <= 0){
            ggl.setAttribute('class', 'fade in');
            
        }
    },1500);
</script>
<?php 
include_once "view/footer.php";
?>

