/*
题目：某店搞活动，1瓶水1块钱，2个瓶子可以换1瓶水，3个瓶盖可以换一瓶水，问：用20块能换多少瓶水？

思路推演：

	钱：	m
	瓶子：	x
	瓶盖：	y
	瓶子：	z

	1z = 1m
	2x = z;
	3y = z;

	x + y = z;

	20m = ?z

	20m = 						20z

	10 + 6 + 2y 				16z
	8 + 6 						14z
	7 + 4 + 2y 					11z
	5 + 4+ x + y 				9z
	5 + 3  + y  				8z
	4 + 3  						7z
	3 + 2 + x + y 				5z
	3 + 2 						5z
	2 + 1 + x + 2y 				3z
	2 + 1 + 2y  				3z
	1 + 1 + 1x + 2y 			2z
	1 + 1 + 1x + 1y				2z
	1 + 1 + 1x					2z
	1 + 1x + 2y					1z
	1 + 1						2z
	1 + 2y						1z
	0 +	1 + 1x					1z
	1 + 0 + 1y					1z
*/

/*
	开发思路：
		1、必定是循环
		2、必定有 + / % 运算符操作
		3、列出已有信息
		4、得先确定循环条件
*/

function getBottle(money, bool){
	var bottlePrice = 1; //水价格
	var bottles = money / bottlePrice; // 能买多少瓶水
	var sum = 0; // 换水总数
	
	// 计算总得水数
	if(bool === true){
		sum = bottles;
	}

	// 瓶盖数
	var cap = bottles;
	// 瓶子数
	var body = bottles;

	// 瓶盖换水比率
	var cap_to_bottle = 3;
	// 瓶子换水比率
	var body_to_bottle = 2;

	//循环条件：瓶盖数 大于 瓶盖换水比率 或者 瓶子数 大于 瓶子换水比率
	while(cap >= cap_to_bottle || body >= body_to_bottle){
		// 总瓶盖数可换 水数
		var changeCap = Math.floor(cap / cap_to_bottle);
		// 总瓶子数可换 水数
		var changeBody = Math.floor(body / body_to_bottle);
		// 当前总换水数
		var changeBottles = changeCap + changeBody;

		// 总瓶盖数换水后 剩余瓶盖数
		var balCap = cap % cap_to_bottle;
		// 总瓶子数换水后 剩余瓶盖数
		var balBody = body % body_to_bottle;

		// 计算当前总换水数
		sum += changeBottles;

		// 计算当前总瓶盖数 
		cap = balCap + changeBottles;
		// 计算当前总子盖数
		body = balBody + changeBottles;

		console.log('还有 ' +changeBottles+ ' 瓶， 目前已换' +sum+ '瓶水，还剩 ' +balCap+ ' 个瓶盖' + balBody + ' 个瓶子');
    }

	return '能换' +sum+ '瓶水，还剩 ' +balCap+ ' 个瓶盖' + balBody + ' 个瓶子';
}

getBottle(20);