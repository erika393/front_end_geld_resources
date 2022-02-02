<?php

namespace App\Controllers;

//os recursos do miniframework
use MF\Controller\Action;
use MF\Model\Container;

class IndexController extends Action {

	public function admin(){
		$this->render('admin');
	}

	public function index() {
		$this->render('index');
	}

	public function consumption(){
		$this->render('consumption');
	}

	public function energy_sources(){
		$this->render('energy_sources');
	}
	
	public function indexes(){
		$this->render('indexes');
	}

	public function introduction(){
		$this->render('introduction');
	}

	public function market_experts(){
		$this->render('market_experts');
	}

	public function opinion_stake(){
		$this->render('opinion_stake');
	}

	public function references(){
		$this->render('references');
	}

	public function res_automation(){
		$this->render('res_automation');
	}

	public function res_demand_adjustment(){
		$this->render('res_demand_adjustment');
	}

	public function res_energy(){
		$this->render('res_energy');
	}

	public function res_freecontract_environment(){
		$this->render('res_freecontract_environment');
	}

	public function res_lighting(){
		$this->render('res_lighting');
	}

	public function res_refrigeration(){
		$this->render('res_refrigeration');
	}

	public function res_solar_energy(){
		$this->render('res_solar_energy');
	}

	public function res_tributary(){
		$this->render('res_tributary');
	}

	public function result_of_analysis(){
		$this->render('result_of_analysis');
	}

	public function valuation(){
		$this->render('valuation');
	}
}


?>