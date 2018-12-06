<?php 
include_once "view/header.php";
?>
<div id="home-screen">
	<button class="menu" style="margin-top: 30px;padding:4px 12px 10px 12px;font-size: 12px;margin-right: 50px;" data-toggle="modal" data-target="#myModal">
		<span class="glyphicon glyphicon-user" style="margin-right: 7px;position: relative;top:2px"></span>ABOUT
	</button>
	<a href="home.php" style="text-decoration: none"><button class="menu"><span class="glyphicon glyphicon-play-circle" style="margin-right: 5px;position: relative;top:4px"></span>PLAY NOW</button></a>
	<div id="myModal" class="modal fade" role="dialog">
		<div class="modal-dialog modal-lg">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header" style="background-color: #35A4EE;font-weight:bold;color: #fff;border-top-left-radius: 5px;border-top-right-radius: 5px">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h3 class="modal-title" style="font-weight: bold;text-align: center">ABOUT US</h3>
				</div>
				<div class="modal-body" style="overflow: auto;">
					<div class="col-sm-4">
						<div class="img-radius" style="text-align: center">
							<img src="view/image/a.jpeg" style="border-radius: 100%;width: 150px;height: 150px">
						</div>
						<h4 class="jdl-ab">HAMDAN NAHARI</h4>
						<h5>
							
						</P>
					</div>
					<div class="col-sm-4">
						<div class="img-radius" style="text-align: center">
							<img src="view/image/Selection_041.png" style="border-radius: 100%;width: 150px;height: 150px">
						</div>
						<h4 class="jdl-ab">RAMADHAN SHALAHUDIN AL AYYUBI</h4>
					</div>
					<div class="col-sm-4">
						<div class="img-radius" style="text-align: center">
							<img src="view/image/in.jpeg" style="border-radius: 100%;width: 150px;height: 150px">
						</div>
						<h4 class="jdl-ab">INTAN PRADINA RAMADANTY</h4>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
<?php 
include_once "view/footer.php";
?>