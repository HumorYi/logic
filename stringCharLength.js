/*
	题目：计算一个字符串的字节长度
	规则：
		1、当前字符位的unicode码 <= 255，那么该字符字节长度为 1；
		2、当前字符位的unicode码 > 255，那么该字符字节长度为 2；(中文 包括中文符号等)
 */

//  方法1
function getStringCharLength(str) {
	var sum = 0;
	for (var i = 0, len = str.length; i < len; i++) {
		var code = str.charCodeAt(i);
		if (code <= 255) {
			sum++;
		}
		else if (code > 255) {
			sum += 2;
		}
	}

	return sum;
}

getStringCharLength("ad 这苏打粉 zp");

// 方法2
function getStringCharLength1(str) {
	var sum = str.length;
	for (var i = 0; i < sum; i++) {
		var code = str.charCodeAt(i);
		if (code > 255) {
			sum++;
		}
	}

	return sum;
}

getStringCharLength1("ad 这苏打粉 zp");