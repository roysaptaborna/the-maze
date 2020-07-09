//The Maze by Saptaborna Roy

var endX;
var ball;
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var a9;
var a10;
var a11;
var a12;
var a13;
var a14;
var a15;
var a16;
var a17;
var a18;
var a19;
var a20;
var a21;
var a22;
var a23;
var a24;
var a25;
var a26;
var a27;
var a28;
var a29;
var a30;
var a31;
var a32;
var a33;
var a34;
var a35;
var a36;
var a37;
var a38;
var a39;
var a40;
var a41;
var a42;
var a43;
var a44;
var a45;
var a46;
var a47;
var a48;
var a49;
var a50;
var a51;
var x;

function setup() {
	endX = createSprite(352.5, 370, 35, 5);
	ball = createSprite(40, 40, 15, 15);
	a1 = createSprite(200, 30, 348, 5);
	a2 = createSprite(30, 200, 5, 340);
	a3 = createSprite(200, 370, 348, 5);
	a4 = createSprite(370, 200, 5, 340);
	a5 = createSprite(93, 50, 3, 40);
	a6 = createSprite(185, 70, 3, 80);
	a7 = createSprite(63, 85, 3, 40);
	a8 = createSprite(90, 106, 60, 3);
	a9 = createSprite(123.5, 105, 3, 75);
	a10 = createSprite(154, 85, 3, 40);
	a11 = createSprite(170, 107, 35, 3);
	a12 = createSprite(215, 90, 3, 40);
	a13 = createSprite(230, 107, 37, 3);
	a14 = createSprite(275, 69, 120, 3);
	a15 = createSprite(290, 107, 30, 3);
	a16 = createSprite(338, 105, 3, 80);
	a17 = createSprite(228, 144, 215, 3);
	a18 = createSprite(93, 145, 3, 80);
	a19 = createSprite(276, 125, 3, 33);
	a20 = createSprite(45, 143, 30, 3);
	a21 = createSprite(105, 182, 90, 3);
	a22 = createSprite(215, 180, 3, 80);
	a23 = createSprite(305, 182, 120, 3);
	a24 = createSprite(185, 200, 3, 40);
	a25 = createSprite(200, 218, 30, 3);
	a26 = createSprite(95, 218, 120, 3);
	a27 = createSprite(245, 215, 3, 75);
	a28 = createSprite(305, 219, 60, 3);
	a29 = createSprite(45, 255, 30, 3);
	a30 = createSprite(155, 310, 3, 110);
	a31 = createSprite(337, 270, 3, 115);
	a32 = createSprite(275, 330, 125, 3);
	a33 = createSprite(245, 256, 70, 3);
	a34 = createSprite(307, 348, 3, 37);
	a35 = createSprite(246, 310, 3, 35);
	a36 = createSprite(307, 235, 3, 35);
	a37 = createSprite(276, 275, 3, 34);
	a38 = createSprite(293, 293, 30, 3);
	a39 = createSprite(215, 273, 3, 30);
	a40 = createSprite(200, 293, 32, 3);
	a41 = createSprite(185, 310, 3, 30);
	a42 = createSprite(185, 235, 3, 30);
	a43 = createSprite(170, 255, 30, 3);
	a44 = createSprite(140, 293, 30, 3);
	a45 = createSprite(123, 310, 3, 35);
	a46 = createSprite(108, 330, 30, 3);
	a47 = createSprite(124, 235, 3, 35);
	a48 = createSprite(106, 255, 32, 3);
	a49 = createSprite(93, 275, 3, 35);
	a50 = createSprite(75, 293, 30, 3);
	a51 = createSprite(62, 310, 3, 40);
	x = 0;
}

function draw() {
	edges = createEdgeSprites();

	background("black");

	if (keyWentDown(UP_ARROW)) {
		ball.velocityX = 0;
		ball.velocityY = -5;
	}
	if (keyWentUp(UP_ARROW)) {
		ball.velocityX = 0;
		ball.velocityY = 0;
	}

	if (keyWentDown(DOWN_ARROW)) {
		ball.velocityX = 0;
		ball.velocityY = 5;
	}
	if (keyWentUp(DOWN_ARROW)) {
		ball.velocityX = 0;
		ball.velocityY = 0;
	}
	if (keyWentDown(LEFT_ARROW)) {
		ball.velocityX = -5;
		ball.velocityY = 0;
	}
	if (keyWentUp(LEFT_ARROW)) {
		ball.velocityX = 0;
		ball.velocityY = 0;
	}
	if (keyWentDown(RIGHT_ARROW)) {
		ball.velocityX = 5;
		ball.velocityY = 0;
	}
	if (keyWentUp(RIGHT_ARROW)) {
		ball.velocityX = 0;
		ball.velocityY = 0;
	}

	if (ball.isTouching(endX)) {
		x = 1;
	}
	if (x == 1) {
		ball.setVelocity(0, 0);
		background("white");
		textSize(25);
		text("!!YOU WIN!!", 125, 200);
	}
	if (keyDown("enter")) {
		x = 0;
		ball.x = 40;
		ball.y = 40;
	}
	fill("white");
	text("end", 340, 385);

	createEdgeSprites();
	ball.bounceOff(edges);

	ball.bounceOff(a1);
	ball.bounceOff(a2);
	ball.bounceOff(a3);
	ball.bounceOff(a4);
	ball.bounceOff(a5);
	ball.bounceOff(a6);
	ball.bounceOff(a7);
	ball.bounceOff(a8);
	ball.bounceOff(a9);
	ball.bounceOff(a10);
	ball.bounceOff(a11);
	ball.bounceOff(a12);
	ball.bounceOff(a13);
	ball.bounceOff(a14);
	ball.bounceOff(a15);
	ball.bounceOff(a16);
	ball.bounceOff(a17);
	ball.bounceOff(a18);
	ball.bounceOff(a19);
	ball.bounceOff(a20);
	ball.bounceOff(a21);
	ball.bounceOff(a22);
	ball.bounceOff(a23);
	ball.bounceOff(a24);
	ball.bounceOff(a25);
	ball.bounceOff(a26);
	ball.bounceOff(a27);
	ball.bounceOff(a28);
	ball.bounceOff(a29);
	ball.bounceOff(a30);
	ball.bounceOff(a31);
	ball.bounceOff(a32);
	ball.bounceOff(a33);
	ball.bounceOff(a34);
	ball.bounceOff(a35);
	ball.bounceOff(a36);
	ball.bounceOff(a37);
	ball.bounceOff(a38);
	ball.bounceOff(a39);
	ball.bounceOff(a40);
	ball.bounceOff(a41);
	ball.bounceOff(a42);
	ball.bounceOff(a43);
	ball.bounceOff(a44);
	ball.bounceOff(a45);
	ball.bounceOff(a46);
	ball.bounceOff(a47);
	ball.bounceOff(a48);
	ball.bounceOff(a49);
	ball.bounceOff(a50);
	ball.bounceOff(a51);

	ball.shapeColor = "white";

	a1.shapeColor = "white";
	a2.shapeColor = "white";
	a3.shapeColor = "white";
	a4.shapeColor = "white";
	a5.shapeColor = "white";
	a6.shapeColor = "white";
	a7.shapeColor = "white";
	a8.shapeColor = "white";
	a9.shapeColor = "white";
	a10.shapeColor = "white";
	a11.shapeColor = "white";
	a12.shapeColor = "white";
	a13.shapeColor = "white";
	a14.shapeColor = "white";
	a15.shapeColor = "white";
	a16.shapeColor = "white";
	a17.shapeColor = "white";
	a18.shapeColor = "white";
	a19.shapeColor = "white";
	a20.shapeColor = "white";
	a21.shapeColor = "white";
	a22.shapeColor = "white";
	a23.shapeColor = "white";
	a24.shapeColor = "white";
	a25.shapeColor = "white";
	a26.shapeColor = "white";
	a27.shapeColor = "white";
	a28.shapeColor = "white";
	a29.shapeColor = "white";
	a30.shapeColor = "white";
	a31.shapeColor = "white";
	a32.shapeColor = "white";
	a33.shapeColor = "white";
	a34.shapeColor = "white";
	a35.shapeColor = "white";
	a36.shapeColor = "white";
	a37.shapeColor = "white";
	a38.shapeColor = "white";
	a39.shapeColor = "white";
	a40.shapeColor = "white";
	a41.shapeColor = "white";
	a42.shapeColor = "white";
	a43.shapeColor = "white";
	a44.shapeColor = "white";
	a45.shapeColor = "white";
	a46.shapeColor = "white";
	a47.shapeColor = "white";
	a48.shapeColor = "white";
	a49.shapeColor = "white";
	a50.shapeColor = "white";
	a51.shapeColor = "white";
	if (x == 0) {
		drawSprites();
	}
}
