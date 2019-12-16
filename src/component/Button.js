import React from 'react';

export default function Button() {
	return (
		<div className="container-fluid">
			<div className="row ">
				<div className="col-3">
					<button type="button" className="btn btn-success" name="ac">AC</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-success" name="plusMinus">+/-</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-success" name="percentage">%</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-success" name="divide">/</button>
				</div>

				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numOne">1</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numTwo">2</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numThree">3</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-success" name="times">*</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numFour">4</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numFour">5</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numSix">6</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-success" name="minus">-</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numSeven">7</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numEight">8</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numNine">9</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-success" name="plus">+</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="numThree">0</button>
				</div>
				<div className="col-3">
					<button type="button" className="btn btn-secondary" name="period">.</button>
				</div>
				<div className="col-6 p-0">
					<button type="button" className="btn btn-secondary" name="equal">=</button>
				</div>
			</div>
		</div>
	)
}
