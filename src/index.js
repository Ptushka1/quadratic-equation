module.exports = function solveEquation(equation) {
  var solutions = equation.replace(/\s+/g,"");

	let a = parseFloat(solutions);
	let b = parseFloat(solutions.substr(a.toString().length+4));
	let c = parseFloat((b > 0) ? solutions.substr(eval(a.toString().length+7+b.toString().length)) : solutions.substr(eval(a.toString().length+6+b.toString().length)));

	let x1=Math.round(-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a);
	let x2=Math.round(-b/2/a-Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a);

	solutions = [];

	solutions.push(x1);
	solutions.push(x2);
	solutions.sort((left,right) => left - right);
	return solutions;
}
