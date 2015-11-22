$(document).ready(function(){
	var student = ' <div class="col-sm-9 col-md-10"><form><h3 class="text-center">Students Details</h3><section class="row"><div class="col-sm-4"></div><div class="col-sm-4" id="sign_up"><label>Admission Number</label><br><label>Password</label><br><input  type="password" placeholder="Enter Your password" validate ><br><br><label>Confirm Password</label><br><input  type="password" placeholder="Confirm Your password" validate ><br><br><button>Sign In</button></div><div class="col-sm-4"></div></section></form></div>'
	$('#second').on('click', function(){
		$('.cont').html(student);
	});
	var teacher= '<div class="col-sm-9 col-md-10"><form><h3 class="text-center">Teachers Details</h3><section class="row"><div class="col-sm-4"></div><div class="col-sm-4" id="sign_up"><label>Tsc Number</label><br><input  type="number" placeholder="Enter a valid Tsc Number" validate ><br><label>Password</label><br><input  type="password" placeholder="Enter Your password" validate ><br><br><a href="register.html">Sign In</a></div><div class="col-sm-4"></div></section></form></div>'
		$('#charge').on('click', function(){
			$('.cont').html(teacher);
		})

		$('.cont').html(teacher);
		

});