//INDEX
$(".login-link").click(function(){
	$(".container-entrar").removeClass("d-none")
})

$(".off-img").click(function(){
	$(this).addClass("d-none")
	$(".on-img").addClass("d-block")
	
})

$(".on-img").click(function(){
	$(this).addClass("d-none")
	$(".off-img").addClass("d-block")
	
})

$(window).on("scroll load",function(){
	var aparecer = 50; 
	var eleHeight = $('.row-vantages').outerHeight(); 
	var eleTopo = $('.row-vantages').offset().top; 
	var scrlTopo = $(window).scrollTop(); 
	var distance = eleTopo-scrlTopo; 
	var altJanela = window.innerHeight; 
	if(distance <= altJanela-(eleHeight*(aparecer/100))) {
		$(".i-v").css("animation", "rotate 5s 1")
		$(".col-sus").css("animation", "fade 3s 1")
		$(".col-sus").css("-webkit-animation-fill-mode"
		, "forwards")
	
		$(".col-tech").css("animation", "fade 3s 1")
		$(".col-tech").css("-webkit-animation-fill-mode"
		, "forwards")
		$(".col-tech").css("-webkit-animation-delay", "1s")

		$(".col-eco").css("animation", "fade 3s 1")
		$(".col-eco").css("-webkit-animation-fill-mode"
		, "forwards")
		$(".col-eco").css("-webkit-animation-delay", "2s")
	}
})

$(window).on("scroll load1",function(){
	var aparecer = 50; 
	var eleHeight = $('.bemvindo').outerHeight(); 
	var eleTopo = $('.bemvindo').offset().top; 
	var scrlTopo = $(window).scrollTop(); 
	var distance = eleTopo-scrlTopo; 
	var altJanela = window.innerHeight; 
	if(distance <= altJanela-(eleHeight*(aparecer/100))) {
		$(".bemvindo").css("animation", "fade 3s 1")
		$(".bemvindo").css("-webkit-animation-fill-mode", "forwards")
	}
})

$(window).on("scroll load2",function(){
	var aparecer = 50; 
	var eleHeight = $('.supporte').outerHeight(); 
	var eleTopo = $('.supporte').offset().top; 
	var scrlTopo = $(window).scrollTop(); 
	var distance = eleTopo-scrlTopo; 
	var altJanela = window.innerHeight; 
	if(distance <= altJanela-(eleHeight*(aparecer/100))) {
		$(".supporte").css("animation", "fade 3s 1")
	}
})


$(".btn-send-support").mouseenter(function(){
	$(".icon-send").removeClass("d-none")
	$(".span-send").addClass("d-none")
})

$(".btn-send-support").mouseleave(function(){
	$(".span-send").removeClass("d-none")
	$(".icon-send").addClass("d-none")
})


//INTRO

$(".fa-pen").click(function(){
	$(".container-edit").removeClass("d-none")
})

$(".fa-trash-can").click(function(){
	$(".container-delete").removeClass("d-none")
})

$(".btn-delete-user").click(function(){
	$(".div-progress").removeClass("d-none")
})


//ADMIN
$(".btn-add").click(function(){
	$(".container-add").removeClass("d-none")
})

$(".btn-edit").click(function(){
	$(".container-edit").removeClass("d-none")
})


///////////////////FECHA CONTAINERS ////////////////////////
$(".fa-xmark").click(function(){
	$(".container-black").addClass("d-none")
})


$(".fa-eye").click(function(){
	$(this).addClass("d-none")
	$(".fa-eye-slash").removeClass("d-none")
	$(".password").attr("type", "text")
})

$(".fa-eye-slash").click(function(){
	$(this).addClass("d-none")
	$(".fa-eye").removeClass("d-none")
	$(".password").attr("type", "password")
})

$(".editar").click(function(){
	$(".container-edit").removeClass("d-none")
})

$(".delete").click(function(){
	$(".container-delete").removeClass("d-none")
})

$(".btn-delete-user").click(function(){
	$(".div-progress").removeClass("d-none")
})

//CONSUMO
$(".btn-see-more").click(function(){
	$(".tables-more").removeClass("d-none")
	$(".btn-see-less").removeClass("d-none")
	$(this).addClass("d-none")
})

$(".btn-see-less").click(function(){
	$(".tables-more").addClass("d-none")
	$(".btn-see-more").removeClass("d-none")
	$(this).addClass("d-none")
})

$(".edit-line").click(function(){
	$(".save-line-disabled").addClass("d-none")
	$(".save-line").removeClass("d-none")
	$("input").attr("type", "text").removeAttr("disabled")
})

$(".save-line").click(function(){
	$(".save-line-disabled").removeClass("d-none")
	$(this).addClass("d-none")
	$("input").attr("type", "text").attr("disabled", "disabled")
})

//INDICES
$(".btn-add-indexes").click(function(){
	$(".container-add-indexes").removeClass("d-none")
})

$(".btn-edit-category").click(function(){
	$(".container-edit-category").removeClass("d-none")
})


//FONTES ENERGETICAS
if($(".input-mineirais:checked").is()){
	$(".text-mineirais").removeAttr("disabled")
}

$(".btn-sort-down-gerais").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-up-gerais").removeClass("d-none")
	$(".table-fontes-gerais").removeClass("d-none")
})

$(".btn-sort-up-gerais").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-down-gerais").removeClass("d-none")
	$(".table-fontes-gerais").addClass("d-none")
})

$(".btn-sort-down-est").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-up-est").removeClass("d-none")
	$(".div-fontes-estab").removeClass("d-none")
})

$(".btn-sort-up-est").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-down-est").removeClass("d-none")
	$(".div-fontes-estab").addClass("d-none")
})

$(".btn-sort-down-val-cons").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-up-val-cons").removeClass("d-none")
	$(".div-val-cons").removeClass("d-none")
})

$(".btn-sort-up-val-cons").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-down-val-cons").removeClass("d-none")
	$(".div-val-cons").addClass("d-none")
})

$(".btn-sort-down-redes").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-up-redes").removeClass("d-none")
	$(".div-redes").removeClass("d-none")
})

$(".btn-sort-up-redes").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-down-redes").removeClass("d-none")
	$(".div-redes").addClass("d-none")
})


$(".btn-sort-down-ger-var-ps").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-up-ger-var-ps").removeClass("d-none")
	$(".div-ger-var-ps").removeClass("d-none")
})

$(".btn-sort-up-ger-var-ps").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-down-ger-var-ps").removeClass("d-none")
	$(".div-ger-var-ps").addClass("d-none")
})

$(".btn-sort-down-ambiental").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-up-ambiental").removeClass("d-none")
	$(".div-ambiental").removeClass("d-none")
})

$(".btn-sort-up-ambiental").click(function(){
	$(this).addClass("d-none")
	$(".btn-sort-down-ambiental").removeClass("d-none")
	$(".div-ambiental").addClass("d-none")
})


$(".btn-add-mes").click(function(){
	$(".container-add-mes").removeClass("d-none")
})

$(".btn-ger-func").click(function(){
	$(".container-ger-fun").removeClass("d-none")
})

$(".btn-ger-var").click(function(){
	$(".container-ger-var").removeClass("d-none")
})

$(".btn-add-equ").click(function(){
	$(".container-add-equ").removeClass("d-none")
})

$(".btn-drop-var-ps").click(function(){
	$(".container-ger-var-ps").removeClass("d-none")
})

$(".btn-drop-var-gerador").click(function(){
	$(".container-ger-var-gerador").removeClass("d-none")
})

$(".btn-drop-var-vc").click(function(){
	$(".container-ger-var-vc").removeClass("d-none")
})

$(".btn-ger-depart").click(function(){
	$(".container-ger-depart").removeClass("d-none")
})
