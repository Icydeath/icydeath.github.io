 var blu_spells = {
	 'Sickle Slash': { 		type: 'Slashing', 	stat: 'STR +2', skillchain: ['Impaction'], 		enemy: 'Spider', 			locations: ['Zeruhn Mines'] },
	 'Sandspin': { 			type: 'Earth', 		stat: 'VIT +2', skillchain: [''], 				enemy: 'Worm', 				locations: ['Zeruhn Mines'] },
	 'Screwdriver': { 		type: 'Water', 		stat: 'MND +2', skillchain: ['Reverberation'], 	enemy: 'Pugil', 			locations: ['Ghelsba Outpost'] },
	 'Queazyshroom': { 		type: 'Dark', 		stat: 'INT +2', skillchain: [''], 				enemy: 'Funguar', 			locations: ['Ghelsba Outpost'] },
	 'Battle Dance': { 		type: 'Slashing', 	stat: 'STR +2', skillchain: [''], 				enemy: 'Orc', 				locations: ['Ghelsba Outpost'] },
	 'Blastbomb': { 		type: 'Fire', 		stat: 'INT +2', skillchain: ['Liquefaction'], 	enemy: 'Orcish Warmachine', locations: ['Ghelsba Outpost'] },
	 'Feather Storm': { 	type: 'Wind', 		stat: 'AGI +2', skillchain: ['Detonation'], 	enemy: 'Yagudo', 			locations: ['Giddeus'] },
	 'Head Butt': { 		type: 'Blunt', 		stat: 'STR +2', skillchain: ['Impaction'], 		enemy: 'Quadav', 			locations: ['Palborough Mines'] },
	 'Death Scissors': {	type: 'Slashing', 	stat: 'STR +2', skillchain: ['Induration'], 	enemy: 'Scorpion', 			locations: ['Palborough Mines'] },
	 'Power Attack': { 		type: 'Blunt', 		stat: 'STR +2', skillchain: ['Reverberation'], 	enemy: 'Beetle', 			locations: ['Palborough Mines'] },
	 'Foot Kick': { 		type: 'Blunt', 		stat: 'AGI +2', skillchain: ['Liquefaction'], 	enemy: 'Rarab', 			locations: ['Palborough Mines'] },
	 'Wild Carrot': { 		type: 'Light', 		stat: 'MND +2', skillchain: [''], 				enemy: 'Rarab', 			locations: ['Palborough Mines'] },
	 'Pollen': { 			type: 'Light', 		stat: 'MND +2', skillchain: [''], 				enemy: 'Bee', 				locations: ['Giddeus'] },
	 'Jet Stream': { 		type: 'Wind', 		stat: 'AGI +2', skillchain: ['Detonation'], 	enemy: 'Triple Bats', 		locations: ['Ghelsba Outpost (BCNM)'] },
	 'Helldive': { 			type: 'Piercing', 	stat: 'STR +2', skillchain: ['Scission'], 		enemy: 'Bird', 				locations: ['Palborough Mines (BCNM)'] },
	 'Cursed Sphere': { 	type: 'Water', 		stat: 'INT +2', skillchain: ['Induration'], 	enemy: 'Damselfly', 		locations: ['Earthen Cave'] },
	 'Cocoon': { 			type: '-', 			stat: 'VIT +2', skillchain: [''], 				enemy: 'Crawler', 			locations: ['Giddeus'] },
	 'SeedSpray': { 		type: 'Earth', 		stat: 'VIT +2', skillchain: ['Scission'], 		enemy: 'Rafflesia', 		locations: ['Giddeus'] },
	 'Wild Oats': { 		type: 'Earth', 		stat: 'VIT +2', skillchain: [''], 				enemy: 'Mandragora', 		locations: ['Sarutabaruta'] },
	 'Metallic Body': { 	type: '-', 			stat: '?', 		skillchain: [''], 				enemy: 'Crab', 				locations: [''] },
	 
	 'Grand Slam': { 		type: 'Blunt', 		stat: '?', skillchain: [''], enemy: 'Gigas', 		locations: ['Korroloka Tunnel'] },
	 'Maelstrom': { 		type: 'Water', 		stat: '?', skillchain: [''], enemy: 'Sea Monk', 	locations: ['Korroloka Tunnel'] },
	 'MP Drainkiss': { 		type: 'Dark', 		stat: '?', skillchain: [''], enemy: 'Leech', 		locations: ['Korroloka Tunnel'] },
	 'Magnetite Cloud': { 	type: 'Earth', 		stat: '?', skillchain: [''], enemy: 'Antican', 		locations: ['Western Altepa Desert', 'Rabao (Event)'] },
	 '1000 Needles': { 		type: 'Piercing', 	stat: '?', skillchain: [''], enemy: 'Cactuar', 		locations: ['Eastern Altepa Desert'] },
	 'Healing Breeze': { 	type: 'Light', 		stat: '?', skillchain: [''], enemy: 'Dhalmel', 		locations: ['Eastern Altepa Desert'] },
	 'Blood Saber': { 		type: 'Dark', 		stat: '?', skillchain: [''], enemy: 'Skeleton', 	locations: ['Eastern Altepa Desert'] },
	 'Mandibular Bite': { 	type: 'Earth', 		stat: '?', skillchain: [''], enemy: 'Antlion', 		locations: ['Palborough Mines (BCNM)'] },
	 'Self Destruct': { 	type: 'Fire', 		stat: '?', skillchain: [''], enemy: 'Bomb', 		locations: ['Yuhtunga Jungle', 'Ifrit\'s Cauldron'] },
	 'Hydro Shot': { 		type: 'Water', 		stat: '?', skillchain: [''], enemy: 'Sahagin', 		locations: ['Sea Serpent Grotto Entrance', 'Sea Serpent Grotto'] },
	 'Bad Breath': { 		type: 'Dark', 		stat: '?', skillchain: [''], enemy: 'Malboro', 		locations: ['Yhoator Jungle'] },
	 'Magic Fruit': { 		type: 'Light', 		stat: '?', skillchain: [''], enemy: 'Opo-opo', 		locations: ['Yuhtunga Jungle'] },
	 'Radiant Breath': { 	type: 'Light', 		stat: '?', skillchain: [''], enemy: 'Wyvern', 		locations: ['Ifrit\'s Cauldron'] },
	 'Body Slam': { 		type: 'Fire', 		stat: '?', skillchain: [''], enemy: 'Dragon', 		locations: ['Ifrit\'s Cauldron'] },
	 'Frost Breath': { 		type: 'Ice', 		stat: '?', skillchain: [''], enemy: 'Raptor', 		locations: ['Ifrit\'s Cauldron'] },
	 'Charged Whisker': { 	type: 'Lightning', 	stat: '?', skillchain: [''], enemy: 'Courel', 		locations: ['Yhoator Jungle', 'Yuhtunga Jungle'] },
	 'Blitztrahl': { 		type: 'Lightning', 	stat: '?', skillchain: [''], enemy: 'Gigantoad', 	locations: ['Xarcabard'] },
	 'Death Ray': { 		type: 'Dark', 		stat: '?', skillchain: [''], enemy: 'Hecteye', 		locations: [''] },
	 'Claw Cyclone': { 		type: 'Slashing', 	stat: '?', skillchain: [''], enemy: 'Tiger', 		locations: ['Xarcabard'] },
	 'Eyes on Me': { 		type: 'Dark', 		stat: '?', skillchain: [''], enemy: 'Ahriman', 		locations: ['Xarcabard'] },
	 'Memento Mori': { 		type: 'Dark', 		stat: '?', skillchain: [''], enemy: 'Arthas (NM)', 	locations: ['Xarcabard'] },
	 'Light of Penance': { 	type: 'Light', 		stat: '?', skillchain: [''], enemy: 'Tonberry', 	locations: [''] },
 }