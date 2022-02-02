<?php

namespace App;

use MF\Init\Bootstrap;

class Route extends Bootstrap {

	protected function initRoutes() {

		$routes['index'] = array(
			'route' => '/',
			'controller' => 'indexController',
			'action' => 'index'
		);

		$routes['admin'] = array(
			'route' => '/admin',
			'controller' => 'indexController',
			'action' => 'admin'
		);

		$routes['consumption'] = array(
			'route' => '/consumption',
			'controller' => 'indexController',
			'action' => 'consumption'
		);

		$routes['energy_sources'] = array(
			'route' => '/energy_sources',
			'controller' => 'indexController',
			'action' => 'energy_sources'
		);
		
		$routes['indexes'] = array(
			'route' => '/indexes',
			'controller' => 'indexController',
			'action' => 'indexes'
		);

		$routes['introduction'] = array(
			'route' => '/introduction',
			'controller' => 'indexController',
			'action' => 'introduction'
		);

		$routes['market_experts'] = array(
			'route' => '/market_experts',
			'controller' => 'indexController',
			'action' => 'market_experts'
		);

		$routes['opinion_stake'] = array(
			'route' => '/opinion_stake',
			'controller' => 'indexController',
			'action' => 'opinion_stake'
		);

		$routes['references'] = array(
			'route' => '/references',
			'controller' => 'indexController',
			'action' => 'references'
		);

		$routes['res_automation'] = array(
			'route' => '/res_automation',
			'controller' => 'indexController',
			'action' => 'res_automation'
		);

		$routes['res_demand_adjustment'] = array(
			'route' => '/res_demand_adjustment',
			'controller' => 'indexController',
			'action' => 'res_demand_adjustment'
		);

		$routes['res_energy'] = array(
			'route' => '/res_energy',
			'controller' => 'indexController',
			'action' => 'res_energy'
		);

		$routes['res_freecontract_environment'] = array(
			'route' => '/res_freecontract_environment',
			'controller' => 'indexController',
			'action' => 'res_freecontract_environment'
		);

		$routes['res_lighting'] = array(
			'route' => '/res_lighting',
			'controller' => 'indexController',
			'action' => 'res_lighting'
		);

		$routes['res_refrigeration'] = array(
			'route' => '/res_refrigeration',
			'controller' => 'indexController',
			'action' => 'res_refrigeration'
		);

		$routes['res_solar_energy'] = array(
			'route' => '/res_solar_energy',
			'controller' => 'indexController',
			'action' => 'res_solar_energy'
		);


		$routes['res_tributary'] = array(
			'route' => '/res_tributary',
			'controller' => 'indexController',
			'action' => 'res_tributary'
		);

		$routes['result_of_analysis'] = array(
			'route' => '/result_of_analysis',
			'controller' => 'indexController',
			'action' => 'result_of_analysis'
		);

		$routes['valuation'] = array(
			'route' => '/valuation',
			'controller' => 'indexController',
			'action' => 'valuation'
		);

		$this->setRoutes($routes);
	}

}

?>