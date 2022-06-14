/********************************************************/
/* 인트로 지나고 > 스크롤 할 때 종이비행기가 라인 따라가기*/
const path = document.querySelector('.path');
const paper_plane = document.querySelector('.paper_plane');


let pathPosition = path.getBoundingClientRect();
let documentPosition = document.body.getBoundingClientRect();
const pathTotalLength = path.getTotalLength();

function positionElements() {
		// 종이비행기가 화면 중앙에 있게 하기위해 SVG(선)의 세로 중간지점 찾기 
		const relativePageOffset = -pathPosition.top +
					(window.pageYOffset + window.innerHeight * .5);
		
		const pointPercentage = relativePageOffset / pathPosition.height;
		const pointOnPath = pointPercentage * pathTotalLength;
		const pathPoint = path.getPointAtLength(pointOnPath);
    
		// 종이비행기 포지션을 선의위치(선의화면중간지점)x,y로 translate 시킨다.
		paper_plane.style.transform = `translate(
			${ pathPosition.left + pathPoint.x }px,
			${ pathPosition.top + pathPoint.y }px
		)`;
}

window.addEventListener('scroll', () => {
	positionElements();
})

window.addEventListener('resize', () => {
	pathPosition = path.getBoundingClientRect();
	documentPosition = document.body.getBoundingClientRect();
	
	positionElements();
});

positionElements();