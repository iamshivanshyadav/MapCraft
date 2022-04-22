function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 23.07847, lng: 76.85228 },
		zoom: 18,
		mapId: '409780555defd19d',

	});
	

	const markers = [
		["Vit Bhopal",
			23.077504590692964,
			76.85136940609604,
			"college.png",
			38,
			31
		],
		[
			"Nallo ka Pedh",
			23.0776551595101,
			76.85076095528207,
			"tree.png",
			38,
			31
		],
		["Professional Hair Salon",

			23.075261601453526, 76.86024256420808,
			"saloon.png",
		38,31
		],


		["New Vit Bhopal Boys hostel",
			23.0734256888592, 76.85951300323198,
		"hostel.png",38,31],


		["UB",
		23.07743817782783, 76.8505794368802,
	"foodcourt.png",38,31],



		["New academic block",
		23.0786441992155, 76.85019637247659,"academic.jfif",38,31],

		["BPCL petrol and cng station",
			23.08365757770936, 76.84761198053903,
		"gas.png",38,31],


		["Dharashing bakoriya kirana shop",
			23.0818020398579, 76.84387834543104, "gstore.png", 38, 31],
		["Aditiya Mobil Rechage Kirna",
			23.079300575181453, 76.83989481832327, "gstore.png", 38, 31],
		["Ajay General Store Kothari",
		23.07834316878209, 76.83831767942254,"gstore.png",38,31],

["Rajesh Kirana Store",
		23.07662574225205, 76.83912234212701,"gstore.png",38,31],

		["Sub Post Office",
		23.07802669143069, 76.83554381169014,"subpost.png",38,31],


		["Tour and travels",
		23.077000183859685, 76.83249682211924,"t&t.png",38,31],


["Suraj malakar coffee shop",
23.081006233386503, 76.84196367878924,"coffee.png",38,31],



["Mantri coldrink",

23.079032217151738, 76.83732882141379,"foodcourt.png",38,31],

["Pahalwan Hotel",

23.078471481322026, 76.83710532094783,"foodcourt.png",38,31],

["Shri Hanuman Ji Mandir",

23.091672823802334, 76.8566595122021,"mandir.png",38,31],



["Radha swami satang nayas",

23.088761317219493, 76.8535374323981,"mandir.png",38,31],


["krishna dhaba",
23.069327039841966, 76.81962356910661,"foodcourt.png",38,31],


["Dev baba mandir",

23.096923149273582, 76.86301098310724,"mandir.png",38,31],


["Anup Doctor",

23.065536573936864, 76.84048042672131,"clinic.png",38,31]
	]
	


for(let i = 0; i<markers.length; i++){
		const currMarker = markers[i];



	const marker=new google.maps.Marker({
		position: { lat: currMarker[1], lng:currMarker[2]},
		map,
		title:currMarker[0],
		icon: {
			url: currMarker[3],
			scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
		},
		animation: google.maps.Animation.DROP
	});

const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],
  });
marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}
}