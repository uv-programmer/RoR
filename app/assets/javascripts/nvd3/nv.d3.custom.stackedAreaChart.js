var negative_test_data=[{key:"North America",values:[[10254096e5,23.041422681023],[1028088e6,19.854291255832],[10307664e5,21.02286281168],[10333584e5,22.093608385173],[10360404e5,25.108079299458],[10386324e5,26.982389242348],[10413108e5,19.828984957662],[10439892e5,19.914055036294],[10464084e5,19.436150539916],[10490868e5,21.558650338602],[10516752e5,24.395594061773],[10543536e5,24.747089309384],[10569456e5,23.491755498807],[1059624e6,23.376634878164],[10623024e5,24.581223154533],[10648944e5,24.922476843538],[1120104e6,31.818617451128],[11227824e5,32.960314008183],[11254608e5,31.313383196209],[11280528e5,33.125486081852],[11307348e5,32.791805509149],[11333268e5,33.506038030366],[11360052e5,26.96501697216],[11386836e5,27.38478809681],[11411028e5,27.371377218209],[11437812e5,26.309915460827],[11463696e5,26.425199957518],[1149048e6,26.823411519396],[115164e7,23.850443591587],[11543184e5,23.158355444054],[11569968e5,22.998689393695],[11595888e5,27.9771285113],[11622708e5,29.073672469719],[11648628e5,28.587640408904],[11675412e5,22.788453687637],[11702196e5,22.429199073597],[11726388e5,22.324103271052],[11753136e5,17.558388444187],[11779056e5,16.769518096208],[1180584e6,16.214738201301],[1183176e6,18.729632971229],[11858544e5,18.814523318847],[11885328e5,19.789986451358],[11911248e5,17.070049054933],[11938032e5,16.121349575716],[11963988e5,15.141659430091],[11990772e5,17.175388025297],[12017556e5,17.286592443522],[12042612e5,16.323141626568],[1206936e6,19.231263773952],[1209528e6,18.446256391095],[12122064e5,17.822632399764],[12147984e5,15.53936647598],[12174768e5,15.255131790217],[12201552e5,15.660963922592],[12227472e5,13.254482273698],[12254256e5,11.920796202299],[12280212e5,12.122809090924],[12306996e5,15.691026271393],[1233378e6,14.720881635107],[12357972e5,15.387939360044],[1238472e6,13.765436672228],[1241064e6,14.631445864799],[12437424e5,14.292446536221],[12463344e5,16.170071367017],[12490128e5,15.948135554337],[12516912e5,16.612872685134],[12542832e5,18.778338719091],[12569616e5,16.756026065421],[12595572e5,19.385804443146],[12622356e5,22.950590240168],[1264914e6,23.61159018141],[12673332e5,25.708586989581],[1270008e6,26.883915999885],[12726e8,25.893486687065],[12752784e5,24.678914263176],[12778704e5,25.937275793024],[12805488e5,29.461381693838],[12832272e5,27.357322961861],[12858192e5,29.057235285673],[12884976e5,28.549434189386],[12910932e5,28.506352379724],[12937716e5,29.449241421598],[129645e7,25.796838168807],[13120848e5,23.24364413887],[13147632e5,31.591854066817],[13173552e5,31.497112374114],[13200336e5,26.67238082043],[13226292e5,27.297080015495],[13253076e5,20.174315530051],[1327986e6,19.631084213898],[13304916e5,27.366462219461],[13331664e5,27.284784434185],[13357584e5,32.157810257624]]}];nv.addGraph(function(){var a=nv.models.stackedAreaChart().x(function(a){return a[0]}).y(function(a){return a[1]}).clipEdge(!0).useInteractiveGuideline(!0);return a.xAxis.showMaxMin(!1).tickFormat(function(a){return d3.time.format("%x")(new Date(a))}),a.showLegend(!1),a.showControls(!1),a.color(["#91c46b","#e77338","#5e83bf","#ffd65f"]),a.margin({left:40,right:0,top:10,bottom:20}),a.yAxis.tickFormat(d3.format(",.2f")),d3.select("#stackedAreaChart svg").datum(negative_test_data).transition().duration(500).call(a),nv.utils.windowResize(a.update),a});