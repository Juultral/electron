var rotire=0,t,h,w,b=5,k;
var img,x,y,poza,i=0,canvas,st=5,Culoare="#000";
poza="null";
function upload(myFile){
	clear();
	var file = myFile.files[0];  
   	poza = file.path;
	setup();
	i=0;
	rotire=0;
}
function grosime(){
	st = document.getElementById("m").value;
	if(st==0){st=5;}
}
function culoare(){
	Culoare = document.getElementById("cl").value;
}
function setup(){
	k= document.getElementById('par');
	if(poza!="null"){
		x = windowWidth-200;
		y = windowHeight-150;
		img = loadImage(poza, function(img) {    
		    if(img.width>x&&img.height>y){
		    	img.resize(x,y);
			}
			i=0;
			w=img.width;
			h=img.height;
			canvas = createCanvas(w, h);
			canvas.parent("cnv");
		  });

	}else{
		canvas = createCanvas(0, 0);
		canvas.parent("cnv");
	}
}
function brush(){
	if(k.style.display=="none"&&poza!="null"){
		k.style.display='block';
		document.getElementById('br_act').style.color="white"
	}else{
		console.log("block")
		k.style.display="none";
		document.getElementById('br_act').style.color="#212529"
	}
}
function touchMoved(){
	if(k.style.display=='block'){
		strokeWeight(st);
		stroke(Culoare);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}

}
function Rotate(){
	// var r = document.getElementById("cnv");
	if(poza!="null")rotire++;
	// r.style.transform="rotate("+rotire*90+"deg)";
	// canvas.rotate(radians(rotire*90));
	// if(rotire%2!=0){
	// 	r.style.marginTop="150px";
	// }else {
	// 	r.style.marginTop="0px";
	// }
	i=0;
	draw();
}
function lumina(){
	var j = document.getElementById('lum');
	if(j.style.display=="none"&&poza!="null"){
		j.style.display='block';
	}else {
		j.style.display='none';
	}
	
}
function luminozitate(){
	i=2;
	brush();
	b=document.getElementById("b").value;
	draw();
}
function windowResized() {
  resizeCanvas(windowWidth-200, windowHeight-150);
  setup();
}
function draw() {
	if(poza!="null"&&i==0){
		if(rotire%2!=0){
			canvas.size(h,w);
			// img.resize(h,w);
			console.log(img.width,img.height)
			imageMode(CENTER);
			translate(h/2,w/2);
			rotate(radians(rotire*90));
			// img.resize(h,w);
			background(img);
		}else if(rotire%2==0&&rotire!=0){
			canvas.size(w,h);
			img.resize(w,h);
			imageMode(CENTER);
			translate(w/2,h/2);
			rotate(radians(rotire*90));
			background(img);
		}else{
			background(img);
		}
		i=1;
	}
	if(i==2){
		brightness(b);
		background(img);
		i=1;
	}
}
function Clear() {
  clear();
  i=0;
  draw();
}
function Save(){
	if(poza!="null"){
		save();
	}else {
		alert("Nici o poza activa")
	}
}
function Close(){
	poza="null";
	setup();
}
