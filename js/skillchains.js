var element_info = {
	'Fire': 'fireIcon',
	'Ice': 'iceIcon',
	'Wind': 'windIcon',
	'Earth': 'earthIcon',
	'Lightning': 'lightningIcon',
	'Water': 'waterIcon',
	'Light': 'lightIcon',
	'Dark': 'darkIcon',
};

var skillchain_info = {
	'Scission': { 'name': 'Scission', 'icon': 'scissionIcon', 'elements': {'Earth': element_info['Earth']}, 'lvl': 1 },
	'Detonation': { 'name': 'Detonation', 'icon': 'detonationIcon', 'elements': {'Wind': element_info['Wind']}, 'lvl': 1 },
	'Reverberation': { 'name': 'Reverberation', 'icon': 'reverberationIcon', 'elements': {'Water': element_info['Water']}, 'lvl': 1 },
	'Induration': { 'name': 'Induration', 'icon': 'indurationIcon', 'elements': {'Ice': element_info['Ice']}, 'lvl': 1 },
	'Liquefaction': { 'name': 'Liquefaction', 'icon': 'liquefactionIcon', 'elements': {'Fire': element_info['Fire']}, 'lvl': 1 },
	'Impaction': { 'name': 'Impaction', 'icon': 'impactionIcon', 'elements': {'Lightning': element_info['Lightning']}, 'lvl': 1 },
	
	'Fusion': { 'name': 'Fusion', 'icon': 'fusionIcon', 'elements': {'Fire': element_info['Fire'], 'Light': element_info['Light']}, 'lvl': 2 },
	'Fragmentation': { 'name': 'Fragmentation', 'icon': 'fragmentationIcon', 'elements': {'Wind': element_info['Wind'], 'Lightning': element_info['Lightning']}, 'lvl': 2 },
	'Distortion': { 'name': 'Distortion', 'icon': 'distortionIcon', 'elements': {'Ice': element_info['Ice'], 'Water': element_info['Water']}, 'lvl': 2 },
	'Gravitation': { 'name': 'Gravitation', 'icon': 'gravitationIcon', 'elements': {'Earth': element_info['Earth'], 'Dark': element_info['Dark']}, 'lvl': 2 },
	
	'Light': { 'name': 'Light', 'icon': 'lightskillchainIcon', 'elements': {'Fire': element_info['Fire'], 'Lightning': element_info['Lightning'], 'Wind': element_info['Wind'], 'Light': element_info['Light']}, 'lvl': 3 },
	'Darkness': { 'name': 'Darkness', 'icon': 'darkskillchainIcon', 'elements': {'Ice': element_info['Ice'], 'Water': element_info['Water'], 'Earth': element_info['Earth'], 'Dark': element_info['Dark']}, 'lvl': 3 },
};

var weapon_info = {
	'Axe': {
		'Raging Axe': {'opener': true, 'skillchain': skillchain_info['Liquefaction'], 'icon': 'ragingaxeIcon', 'ability': false},
		'Smash Axe': {'opener': false, 'skillchain': skillchain_info['Impaction'], 'icon': 'smashaxeIcon', 'ability': false},
		'Avalanche Axe': {'opener': true, 'skillchain': skillchain_info['Distortion'], 'icon': 'avalancheaxeIcon', 'ability': false},
		'Rampage': {'opener': false, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'rampageIcon', 'ability': false},
		'Metatron Torment': {'opener': true, 'skillchain': skillchain_info['Darkness'], 'icon': 'metatrontormentIcon', 'ability': false, 'jobs': ['Warrior']},
	},
	'Bow': {
		'Flame Arrow': {'opener': true, 'skillchain': skillchain_info['Fusion'], 'icon': 'flamingarrowIcon', 'ability': false},
		'Sidewinder': {'opener': false, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'sidewinderIcon', 'ability': false},
		'Apex Arrow': {'opener': true, 'skillchain': skillchain_info['Light'], 'icon': 'apexarrowIcon', 'ability': false, 'jobs': ['Ranger']},
	},
	'Club': {
		'Shining Strike': {'opener': true, 'skillchain': skillchain_info['Induration'], 'icon': 'shiningstrikeIcon', 'ability': false},
		'True Strike': {'opener': true, 'skillchain': skillchain_info['Distortion'], 'icon': 'truestrikeIcon', 'ability': false},
		'Brain Shaker': {'opener': false, 'skillchain': skillchain_info['Detonation'], 'icon': 'brainshakerIcon', 'ability': false},
		'Judgement': {'opener': false, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'judgementIcon', 'ability': false},
		'Realmrazer': {'opener': false, 'skillchain': skillchain_info['Light'], 'icon': 'realmrazerIcon', 'ability': false, 'jobs': ['White Mage','Bard','Scholar']},
	},
	'Dagger': {
		'Wasp Sting': {'opener': true, 'skillchain': skillchain_info['Detonation'], 'icon': 'waspstingIcon', 'ability': false},
		'Cyclone': {'opener': true, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'cycloneIcon', 'ability': false},
		'Viper Bite': {'opener': false, 'skillchain': skillchain_info['Reverberation'], 'icon': 'viperbiteIcon', 'ability': false},
		'Dancing Edge': {'opener': false, 'skillchain': skillchain_info['Fusion'], 'icon': 'dancingedgeIcon', 'ability': false},
		'Mercy Stroke': {'opener': false, 'skillchain': skillchain_info['Darkness'], 'icon': 'mercystrokeIcon', 'ability': false, 'jobs': ['Thief','Dancer']},
	},
	'Great Katana': {
		'Tachi: Enpi': {'opener': true, 'skillchain': skillchain_info['Fusion'], 'icon': 'tachienpiIcon', 'ability': false},
		'Tachi: Yukikaza': {'opener': false, 'skillchain': skillchain_info['Distortion'], 'icon': 'tachiyukikazaIcon', 'ability': false},
		'Sekkanoki': {'opener': true, 'skillchain': skillchain_info['Gravitation'], 'icon': 'abilityIcon', 'ability': true},
		'Konzen-Ittai': {'opener': true, 'skillchain': skillchain_info['Fusion'], 'icon': 'abilityIcon', 'ability': true},
		'Sengikori': {'opener': true, 'skillchain': skillchain_info['Distortion'], 'icon': 'abilityIcon', 'ability': true},
		'Yaegasumi': {'opener': true, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'abilityIcon', 'ability': true},
		'Tachi: Kaiten': {'opener': true, 'skillchain': skillchain_info['Light'], 'icon': 'tachikaitenIcon', 'ability': false, 'jobs': ['Samurai']},
		'Demonsbane': {'opener': true, 'skillchain': skillchain_info['Light'], 'icon': 'abilityIcon', 'ability': true, 'jobs': ['Samurai']},
		'Demonhead': {'opener': true, 'skillchain': skillchain_info['Darkness'], 'icon': 'abilityIcon', 'ability': true, 'jobs': ['Samurai']},
	},
	'Great Sword': {
		'Hard Slash': {'opener': true, 'skillchain': skillchain_info['Gravitation'], 'icon': 'hardslashIcon', 'ability': false},
		'Frostbite': {'opener': false, 'skillchain': skillchain_info['Distortion'], 'icon': 'frostbiteIcon', 'ability': false},
		'Resolution': {'opener': true, 'skillchain': skillchain_info['Light'], 'icon': 'resolutionIcon', 'ability': false, 'jobs': ['Rune Knight']},
		'Cataclysm': {'opener': false, 'skillchain': skillchain_info['Darkness'], 'icon': 'cataclysmIcon', 'ability': false, 'jobs': ['Dark Knight']},
	},
	'Gun': {
		'Heavy Shot': {'opener': true, 'skillchain': skillchain_info['Gravitation'], 'icon': 'heavyshotIcon', 'ability': false},
		'Slug Shot': {'opener': false, 'skillchain': skillchain_info['Gravitation'], 'icon': 'slugshotIcon', 'ability': false},
		'Coronach': {'opener': false, 'skillchain': skillchain_info['Darkness'], 'icon': 'coronachIcon', 'ability': false, 'jobs': ['Corsair']},
	},
	'Hand-to-Hand': {
		'Combo': {'opener': true, 'skillchain': skillchain_info['Impaction'], 'icon': 'comboIcon', 'ability': false},
		'Raging Fists': {'opener': true, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'ragingfistsIcon', 'ability': false},
		'One Inch Punch': {'opener': false, 'skillchain': skillchain_info['Scission'], 'icon': 'oneinchpunchIcon', 'ability': false},
		'Dragon Fist': {'opener': false, 'skillchain': skillchain_info['Fusion'], 'icon': 'dragonfistIcon', 'ability': false},
		'Final Heaven': {'opener': false, 'skillchain': skillchain_info['Light'], 'icon': 'Icon', 'ability': false, 'jobs': ['Monk']},
	},
	'Polearm': {
		'Double Trust': {'opener': true, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'doubletrustIcon', 'ability': false},
		'Penta Trust': {'opener': false, 'skillchain': skillchain_info['Gravitation'], 'icon': 'pentatrustIcon', 'ability': false},
		'Stardiver': {'opener': false, 'skillchain': skillchain_info['Darkness'], 'icon': 'stardiverIcon', 'ability': false, 'jobs': ['Dragoon']},
	},
	'Spell': {
		'Sickle Slash': {'opener': true, 'skillchain': skillchain_info['Impaction'], 'icon': 'physicalIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Screwdriver': {'opener': false, 'skillchain': skillchain_info['Reverberation'], 'icon': 'waterIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Blastbomb': {'opener': false, 'skillchain': skillchain_info['Liquefaction'], 'icon': 'fireIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Feather Storm': {'opener': true, 'skillchain': skillchain_info['Detonation'], 'icon': 'windIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Head Butt': {'opener': false, 'skillchain': skillchain_info['Impaction'], 'icon': 'physicalIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Death Scissors': {'opener': true, 'skillchain': skillchain_info['Induration'], 'icon': 'physicalIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Power Attack': {'opener': true, 'skillchain': skillchain_info['Reverberation'], 'icon': 'physicalIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Foot Kick': {'opener': true, 'skillchain': skillchain_info['Liquefaction'], 'icon': 'physicalIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Jet Stream': {'opener': false, 'skillchain': skillchain_info['Detonation'], 'icon': 'windIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Helldive': {'opener': true, 'skillchain': skillchain_info['Scission'], 'icon': 'physicalIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Cursed Sphere': {'opener': false, 'skillchain': skillchain_info['Induration'], 'icon': 'waterIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Seedspray': {'opener': false, 'skillchain': skillchain_info['Scission'], 'icon': 'earthIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Magnetite Cloud': {'opener': true, 'skillchain': skillchain_info['Gravitation'], 'icon': 'earthIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Hydro Shot': {'opener': true, 'skillchain': skillchain_info['Distortion'], 'icon': 'waterIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Radiant Breath': {'opener': true, 'skillchain': skillchain_info['Fusion'], 'icon': 'lightIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Body Slam': {'opener': false, 'skillchain': skillchain_info['Fusion'], 'icon': 'fireIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Frost Breath': {'opener': false, 'skillchain': skillchain_info['Distortion'], 'icon': 'iceIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Charged Whisker': {'opener': true, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'lightningIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Blitztrahl': {'opener': false, 'skillchain': skillchain_info['Fragmentation'], 'icon': 'lightningIcon', 'ability': false, 'jobs': ['Blue Mage']},
		'Death Ray': {'opener': false, 'skillchain': skillchain_info['Gravitation'], 'icon': 'darkIcon', 'ability': false, 'jobs': ['Blue Mage']},
		//'': {'opener': false, 'skillchain': skillchain_info[''], 'icon': 'Icon', 'ability': false, 'jobs': ['Blue Mage']},
	},
	'Staff': {
		'Shell Crusher': {'opener': true, 'skillchain': skillchain_info['Reverberation'], 'icon': 'shellcrusherIcon', 'ability': false},
		'Sunburst': {'opener': true, 'skillchain': skillchain_info['Fusion'], 'icon': 'sunburstIcon', 'ability': false},
		'Starburst': {'opener': false, 'skillchain': skillchain_info['Induration'], 'icon': 'starburstIcon', 'ability': false},
		'Soul Syphon': {'opener': false, 'skillchain': skillchain_info['Gravitation'], 'icon': 'soulsyphonIcon', 'ability': false},
		'Gate of Tartarus': {'opener': true, 'skillchain': skillchain_info['Darkness'], 'icon': 'gateoftartarusIcon', 'ability': false, 'jobs': ['Black Mage']},
	},
	'Sword': {
		'Fast Blade': {'opener': true, 'skillchain': skillchain_info['Scission'], 'icon': 'fastbladeIcon', 'ability': false},
		'Flat Blade': {'opener': true, 'skillchain': skillchain_info['Gravitation'], 'icon': 'flatbladeIcon', 'ability': false},
		'Burning Blade': {'opener': false, 'skillchain': skillchain_info['Liquefaction'], 'icon': 'burningbladeIcon', 'ability': false},
		'Seraph Blade': {'opener': false, 'skillchain': skillchain_info['Fusion'], 'icon': 'seraphbladeIcon', 'ability': false},
		'Knights of the Round': {'opener': true, 'skillchain': skillchain_info['Light'], 'icon': 'knightsoftheroundIcon', 'ability': false, 'jobs': ['Paladin','Red Mage']},
		'Immortal Lion': {'opener': false, 'skillchain': skillchain_info['Darkness'], 'icon': 'immortallionIcon', 'ability': false, 'jobs': ['Blue Mage']},
	},
	'Katana': {
		'Blade: Retsu': {'opener': true, 'skillchain': skillchain_info['Distortion'], 'icon': 'bladeretsuIcon', 'ability': false},
		'Blade: Jin': {'opener': false, 'skillchain': skillchain_info['Distortion'], 'icon': 'bladejinIcon', 'ability': false},
		'Blade: Metsu': {'opener': true, 'skillchain': skillchain_info['Darkness'], 'icon': 'blademetsuIcon', 'ability': false, 'jobs': ['Ninja']},
	},
}

var job_info = {
	'Bard': {
		'weapons': {'Club': weapon_info['Club']},
		'icon': 'bardIcon',
		'short': 'BRD'
	},
	'Black Mage': {
		'weapons': {'Staff': weapon_info['Staff']},
		'icon': 'blackmageIcon',
		'short': 'BLM'
	},
	'Blue Mage': {
		'weapons': {'Sword': weapon_info['Sword'], 'Club': weapon_info['Club'], 'Spell': weapon_info['Spell']},
		'icon': 'bluemageIcon',
		'short': 'BLU'
	},
	'Corsair': {
		'weapons': {'Gun': weapon_info['Gun']},
		'icon': 'corsairIcon',
		'short': 'COR'
	},
	'Dancer': {
		'weapons': {'Dagger': weapon_info['Dagger']},
		'icon': 'dancerIcon',
		'short': 'DNC'
	},
	'Dark Knight': {
		'weapons': {'Great Sword': weapon_info['Great Sword']},
		'icon': 'darkknightIcon',
		'short': 'DRK'
	},
	'Dragoon': {
		'weapons': {'Polearm': weapon_info['Polearm']},
		'icon': 'dragoonIcon',
		'short': 'DRG'
	},
	'Monk': {
		'weapons': {'Hand-to-Hand': weapon_info['Hand-to-Hand']},
		'icon': 'monkIcon',
		'short': 'MNK'
	},
	'Ninja': {
		'weapons': {'Katana': weapon_info['Katana']},
		'icon': 'ninjaIcon',
		'short': 'NIN'
	},
	'Paladin': {
		'weapons': {'Sword': weapon_info['Sword']},
		'icon': 'paladinIcon',
		'short': 'PLD'
	},
	'Ranger': {
		'weapons': {'Bow': weapon_info['Bow']},
		'icon': 'rangerIcon',
		'short': 'RNG'
	},
	'Red Mage': {
		'weapons': {'Sword': weapon_info['Sword'], 'Club': weapon_info['Club']},
		'icon': 'redmageIcon',
		'short': 'RDM'
	},
	'Rune Knight': {
		'weapons': {'Great Sword': weapon_info['Great Sword']},
		'icon': 'runeknightIcon',
		'short': 'RUN'
	},
	'Samurai': {
		'weapons': {'Great Katana': weapon_info['Great Katana']},
		'icon': 'samuraiIcon',
		'short': 'SAM'
	},
	'Scholar': {
		'weapons': {'Staff': weapon_info['Staff'], 'Club': weapon_info['Club']},
		'icon': 'scholarIcon',
		'short': 'SCH'
	},
	'Thief': {
		'weapons': {'Dagger': weapon_info['Dagger']},
		'icon': 'thiefIcon',
		'short': 'THF'
	},
	'Warrior': {
		'weapons': {'Sword': weapon_info['Sword'], 'Axe': weapon_info['Axe']},
		'icon': 'warriorIcon',
		'short': 'WAR'
	},
	'White Mage': {
		'weapons': {'Club': weapon_info['Club']},
		'icon': 'whitemageIcon',
		'short': 'WHM'
	},
};

var selected_weapons = {
	weapon1: '',
	weapon2: '',
	weapon3: '',
	weapon4: '',
};

var selected_jobs = {
	job1: '',
	job2: '',
	job3: '',
	job4: '',
};

var selfskillchains = true;
var relicskillchains = true;
var spellskillchains = true;

$.each(job_info, function(key, value) {
	$('#selectJob1').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
	$('#selectJob2').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
	$('#selectJob3').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
	$('#selectJob4').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
});

$.each(weapon_info, function(key, value) {
	$('#selectWeapon1').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
	$('#selectWeapon2').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
	$('#selectWeapon3').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
	$('#selectWeapon4').append($('<option>', {
		'value': key,
		'text': key
	  })
	);
});

//***************
// EVENTS
//***************
$("#selectWeapon1").change(selectWeapon);
$("#selectWeapon2").change(selectWeapon);
$("#selectWeapon3").change(selectWeapon);
$("#selectWeapon4").change(selectWeapon);

$("#selectJob1").change(selectJob);
$("#selectJob2").change(selectJob);
$("#selectJob3").change(selectJob);
$("#selectJob4").change(selectJob);

$("#clearJobs").click(clearJobSelects);
$("#clearWeapons").click(clearWeaponSelects);

$("#selfSkillchainsCheckbox").change(function() {
    if(this.checked) { selfskillchains = true; }
	else { selfskillchains = false; }
	pickCalcMethod()
});
$("#relicSkillchainsCheckbox").change(function() {
    if(this.checked) { relicskillchains = true; }
	else { relicskillchains = false; }
	pickCalcMethod()
});
$("#spellSkillchainsCheckbox").change(function() {
    if(this.checked) { spellskillchains = true; }
	else { spellskillchains = false; }
	pickCalcMethod()
});

$('#toggleIconsBtn').click(toggleIcons);
$('#collapseIconsBtn').click(toggleIcons);


//***************
// METHODS
//***************
function pickCalcMethod() {
	if (selected_weapons.weapon1 || selected_jobs.weapon2 || selected_jobs.weapon3 || selected_jobs.weapon4)
		calculate_by_weapons();
	else
		calculate_by_jobs();
}
function toggleIcons() {
	var icon = $('.icontoggle').first();
	
	if (icon.hasClass('fa-caret-down')) {
		icon.removeClass('fa-caret-down');
		icon.addClass('fa-caret-up');
	} else {
		icon.removeClass('fa-caret-up');
		icon.addClass('fa-caret-down');
	}
}
function selectWeapon() {
	var selected = $('#' + this.id + ' option:selected').text();
	var key = 'weapon' + this.id.substring(this.id.length, this.id.length-1)
	if (!selected || selected == 'Choose...' ) {
		selected_weapons[key] = '';
	}
	else {
		selected_weapons[key] = selected;
	}
	clearJobSelects();
	calculate_by_weapons();
}
function selectJob() {
	var selected = $('#' + this.id + ' option:selected').text();
	var key = 'job' + this.id.substring(this.id.length, this.id.length-1)
	if (!selected || selected == 'Choose...' ) {
		selected_jobs[key] = '';
	}
	else {
		selected_jobs[key] = selected;
	}
	clearWeaponSelects();
	calculate_by_jobs();
}

function clearJobSelects() {
	$("#selectJob1").val('Choose...');
	$("#selectJob2").val('Choose...');
	$("#selectJob3").val('Choose...');
	$("#selectJob4").val('Choose...');
	selected_jobs = {
		job1: '',
		job2: '',
		job3: '',
		job4: '',
	};
}
function clearWeaponSelects() {
	$("#selectWeapon1").val('Choose...');
	$("#selectWeapon2").val('Choose...');
	$("#selectWeapon3").val('Choose...');
	$("#selectWeapon4").val('Choose...');
	selected_weapons = {
		weapon1: '',
		weapon2: '',
		weapon3: '',
		weapon4: '',
	};
}

function calculate_by_weapons() {
	var list = [];
	
	$.each(selected_weapons, function(outer, weapon) {
		if (weapon) {		
			$.each(weapon_info[weapon], function(ws, wsinfo) {
				if (wsinfo.opener) {
					$.each(selected_weapons, function(inner, innerweapon) {
						if (innerweapon) {
							if (selfskillchains == true || (inner != outer && !selfskillchains)) {
								$.each(weapon_info[innerweapon], function(innerws, innerwsinfo) {
									if (!innerwsinfo.opener && innerwsinfo.skillchain.name == wsinfo.skillchain.name) {
										var lvl = wsinfo.skillchain.lvl;
										var innerlvl = innerwsinfo.skillchain.lvl;
										
										var entry = generate_row('', '', weapon, innerweapon, ws, innerws, wsinfo, innerwsinfo, lvl, innerlvl);
										if (!list.includes(entry)) {
											if (lvl < 3) {
												if (weapon != "Spell" && innerweapon != "Spell") {
													list.push(entry);
												}
												else if (spellskillchains && (weapon == "Spell" || innerweapon == "Spell")) {
													list.push(entry);
												}
											}
											else if (lvl == 3 && relicskillchains) {
												list.push(entry);
											}
										}
									}
								});
							}
						}
					});
				}
			});
		}
	});
	list.sort();
	list.reverse();
	$('#skillchains_container').html(list.join('\n'));	
	$('[data-toggle="tooltip"]').tooltip();
	setup_tips();
}

function calculate_by_jobs() {
	var list = [];
	
	$.each(selected_jobs, function(outer, job) {
		if (job) {
			$.each(job_info[job].weapons, function(weapon, weaponskills) {
				$.each(weaponskills, function(ws, wsinfo) {
					if (wsinfo.opener) {
						$.each(selected_jobs, function(inner, innerjob) {
							if (innerjob) {
								if (selfskillchains == true || (inner != outer && !selfskillchains)) {
									$.each(job_info[innerjob].weapons, function(innerweapon, innerweaponskills) {
										$.each(innerweaponskills, function(innerws, innerwsinfo) {
											if (!innerwsinfo.opener && innerwsinfo.skillchain.name == wsinfo.skillchain.name) {
												var lvl = wsinfo.skillchain.lvl;
												var innerlvl = innerwsinfo.skillchain.lvl;
												
												var entry = generate_row(job, innerjob, weapon, innerweapon, ws, innerws, wsinfo, innerwsinfo, lvl, innerlvl);												
												if (!list.includes(entry)) {
													if (lvl < 3 && innerlvl < 3) {
														//list.push(entry);
														if (weapon != "Spell" && innerweapon != "Spell") {
															list.push(entry);
														}
														else if ((weapon == "Spell" || innerweapon == "Spell") && spellskillchains) {
															list.push(entry);
														}
													}
													else if (relicskillchains) {	
														var openOk = true;
														if (lvl == 3 && !wsinfo.jobs.includes(job)) { openOk = false; }
														var closeOk = true;
														if (innerlvl == 3 && !innerwsinfo.jobs.includes(innerjob)) { closeOk = false; }
														
														if (openOk && closeOk) {
															list.push(entry);
														}
													}
												}
											}
										});
									});
								}
							}
						});
					}
				});
			});
		}
	});
	list.sort();
	list.reverse();
	$('#skillchains_container').html(list.join('\n'));
	$('[data-toggle="tooltip"]').tooltip();
	setup_tips();
}

function generate_row(job, innerjob, weapon, innerweapon, ws, innerws, wsinfo, innerwsinfo, lvl, innerlvl) {
	var jobIcons = '';
	if (job == '') {
		$.each(job_info, function(j, data) {
			$.each(data.weapons, function(w, wd) {
				if (w == weapon) {
					if (lvl < 3) {
						var icon = data.icon;
						if (jobIcons == '')
							jobIcons += icon + ';' + data.short;
						else
							jobIcons += ',' + icon + ';' + data.short;
					}
					else {
						$.each(wd, function(wskill, wsdata){
							if (wskill == ws && wsdata.jobs && wsdata.jobs.includes(j)) {
								var icon = data.icon;
								if (jobIcons == '')
									jobIcons += icon + ';' + data.short;
								else
									jobIcons += ',' + icon + ';' + data.short;
							}
						});
					}
				}
			});
		});
	}
	
	var innerjobIcons = '';
	if (innerjob == '') {
		$.each(job_info, function(j, data) {
			$.each(data.weapons, function(w, wd) {
				if (w == innerweapon) {
					if (lvl < 3) {
						var icon = data.icon;
						if (innerjobIcons == '')
							innerjobIcons += icon + ';' + data.short;
						else
							innerjobIcons += ',' + icon + ';' + data.short;
					}
					else {
						$.each(wd, function(wskill, wsdata){
							if (wskill == innerws && wsdata.jobs && wsdata.jobs.includes(j)) {
								var icon = data.icon;
								if (innerjobIcons == '')
									innerjobIcons += icon + ';' + data.short;
								else
									innerjobIcons += ',' + icon + ';' + data.short;
							}
						});
					}
				}
			});
		});
	}
	
	var wsicon = weapon.toLowerCase().replaceAll('-','').replaceAll(' ','') + 'Icon';
	if (wsinfo.icon && weapon == 'Spell') {
		wsicon = wsinfo.icon;
	}
	else if (wsinfo.icon && wsinfo.ability) {
		weapon = 'Ability';
		wsicon = wsinfo.icon;
	}
	
	var innerwsicon = innerweapon.toLowerCase().replaceAll('-','').replaceAll(' ','') + 'Icon';
	if (innerwsinfo.icon && innerweapon == 'Spell') {
		innerwsicon = innerwsinfo.icon;
	}
	else if (innerwsinfo.icon && innerwsinfo.ability) {
		innerweapon = 'Ability';
		innerwsicon = innerwsinfo.icon;
	}
	
	var scicon = '';
	if (innerwsinfo.skillchain.icon)
		scicon = innerwsinfo.skillchain.icon;
	
	var scname = wsinfo.skillchain.name;
	if (innerlvl == '3') {
		if (scname == 'Darkness')
			scname = rainbow(scname, 50, 50);
		else
			scname = rainbow(scname);
	}
	
	var ele = '';
	if (innerwsinfo.skillchain.elements) {
		$.each(innerwsinfo.skillchain.elements, function(k, v) {
			if (ele == '')
				ele = v;
			else
				ele += ',' + v;
		});
	}
	
	var entry = '<div class="row display-flex-center row-no-padding text-nowrap" style="width: 100%;padding-top: 10px;">';
	
	entry += '  <div class="col-sm-auto"><div style="display: none;">' + innerlvl + '</div>';
	if (jobIcons == '') 
		entry += '  <div class="' + wsicon + ' float-right" data-toggle="tooltip" data-placement="top" title="' + weapon + '"></div>';
	else 
		entry += '  <div class="' + wsicon + ' float-right tip" data-tip="' + jobIcons + '" data-placement="top"></div>';
	entry += '  </div>';
	
	entry += '  <div class="col-2" style="font-size: 20px;margin-left: 10px;">' + ws + '</div>';
	entry += '  <div class="col-1 text-center" style="font-size: 20px;"> <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </div>';
	
	entry += '  <div class="col-sm-auto">'
	if (innerjobIcons == '') 
		entry += '  <div class="' + innerwsicon + '" data-toggle="tooltip" data-placement="top" title="' + innerweapon + '"></div>';
	else 
		entry += '  <div class="' + innerwsicon + ' tip" data-tip="' + innerjobIcons + '" data-placement="top"></div>';
	entry += '  </div>';
	
	entry += '  <div class="col-2" style="font-size: 20px;margin-left: 10px;">' + innerws + '</div>';
	entry += '  <div class="col-1 text-center" style="font-size: 20px;"> <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </div>';
		
	entry += '  <div class="col-sm-auto"><div class="' + scicon + ' tip" data-tip="' + ele + '" data-placement="top"></div></div>';
	entry += '  <div class="col-2" style="font-size: 20px;margin-left: 10px;">' + scname + '</div>';
	
	entry += '</div>'; //end of row
		
	return entry;
}

function setup_tips() {
	$('.tip').each(function () {
		var splat = $(this).data('tip').split(',');
		var str = '<div><div class="row">';
		for (var i = 0; i < splat.length; i++) {
			var icon = splat[i];
			var txt = '';
			if (splat[i].includes(';')) {
				var arr = splat[i].split(';');
				icon = arr[0];
				txt = arr[1];
			}
			str += '<div class="col-sm-flex"><div class="' + icon + '"></div>' + txt + '</div>';
		}
		str += '</div></div>';
		
		$(this).tooltip({
			html: true,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner icons"></div></div>',
			title: $(str).html()
		});
	});
}

function rainbow(str, a, b) {
	if (!a) { a = '100' } else { a = a.toString(); }
	if (!b) { b = '70' } else { b = b.toString(); }
	
    var multiplier = 10;
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += "<font class='font-weight-bold' style='color: hsl(" + i * multiplier % 360 + ", " + a + "%, " + b + "%)'>";
        result += str.substr(i, 1);
        result += "</font>";
    }
    return result;
}

