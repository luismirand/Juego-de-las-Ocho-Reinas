var _0x188d5f=_0x369f;(function(_0x575764,_0x3e4b7f){var _0xb2527f=_0x369f,_0x3a2cad=_0x575764();while(!![]){try{var _0x257f29=-parseInt(_0xb2527f(0x126))/0x1+-parseInt(_0xb2527f(0x12f))/0x2+parseInt(_0xb2527f(0x136))/0x3+parseInt(_0xb2527f(0x13d))/0x4+parseInt(_0xb2527f(0x135))/0x5+-parseInt(_0xb2527f(0x125))/0x6*(parseInt(_0xb2527f(0x12d))/0x7)+parseInt(_0xb2527f(0x12a))/0x8*(parseInt(_0xb2527f(0x12c))/0x9);if(_0x257f29===_0x3e4b7f)break;else _0x3a2cad['push'](_0x3a2cad['shift']());}catch(_0x33902c){_0x3a2cad['push'](_0x3a2cad['shift']());}}}(_0x1776,0x699b0));var noReinas=0x8;function colocarReina(_0x10f252){var _0x5cfac2=_0x369f;if(window['getComputedStyle'](_0x10f252)[_0x5cfac2(0x139)]=='none'){if(noReinas>0x0&&noReinas<=0x8){_0x10f252['style']=_0x5cfac2(0x131);var _0x3cae88=_0x10f252[_0x5cfac2(0x142)]['rowIndex'],_0x648819=_0x10f252[_0x5cfac2(0x133)],_0x5b2ed4=document['getElementById'](_0x5cfac2(0x13f));for(let _0x5dab7e=0x0;_0x5dab7e<0x8;_0x5dab7e++){_0x648819!=_0x5dab7e&&(_0x5b2ed4[_0x5cfac2(0x140)][_0x3cae88][_0x5cfac2(0x128)][_0x5dab7e]['removeAttribute'](_0x5cfac2(0x138)),incrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x3cae88][_0x5cfac2(0x128)][_0x5dab7e])),_0x3cae88!=_0x5dab7e&&(_0x5b2ed4[_0x5cfac2(0x140)][_0x5dab7e]['cells'][_0x648819][_0x5cfac2(0x13a)](_0x5cfac2(0x138)),incrementQueenCount(_0x5b2ed4['rows'][_0x5dab7e]['cells'][_0x648819]));}var _0x8158d=_0x3cae88,_0x27307d=_0x648819;while(_0x8158d>=0x0&&_0x27307d<0x8){incrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d][_0x5cfac2(0x128)][_0x27307d]),_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d]['cells'][_0x27307d][_0x5cfac2(0x138)]=null,_0x8158d--,_0x27307d++;}_0x8158d=_0x3cae88+0x1,_0x27307d=_0x648819-0x1;while(_0x27307d>=0x0&&_0x8158d<0x8){incrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d][_0x5cfac2(0x128)][_0x27307d]),_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d]['cells'][_0x27307d]['onclick']=null,_0x8158d++,_0x27307d--;}_0x8158d=_0x3cae88,_0x27307d=_0x648819;while(_0x8158d>=0x0&&_0x27307d>=0x0){incrementQueenCount(_0x5b2ed4['rows'][_0x8158d][_0x5cfac2(0x128)][_0x27307d]),_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d][_0x5cfac2(0x128)][_0x27307d][_0x5cfac2(0x138)]=null,_0x8158d--,_0x27307d--;}_0x8158d=_0x3cae88,_0x27307d=_0x648819;while(_0x8158d<0x8&&_0x27307d<0x8){incrementQueenCount(_0x5b2ed4['rows'][_0x8158d][_0x5cfac2(0x128)][_0x27307d]),_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d][_0x5cfac2(0x128)][_0x27307d][_0x5cfac2(0x138)]=null,_0x8158d++,_0x27307d++;}noReinas--;}}else{_0x10f252['style']='background-image:\x20none';var _0x3cae88=_0x10f252['parentElement'][_0x5cfac2(0x13b)],_0x648819=_0x10f252['cellIndex'],_0x5b2ed4=document[_0x5cfac2(0x134)](_0x5cfac2(0x13f));for(let _0x3a97e7=0x0;_0x3a97e7<0x8;_0x3a97e7++){_0x648819!=_0x3a97e7&&decrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x3cae88][_0x5cfac2(0x128)][_0x3a97e7]),_0x3cae88!=_0x3a97e7&&decrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x3a97e7]['cells'][_0x648819]);}var _0x8158d=_0x3cae88,_0x27307d=_0x648819;while(_0x8158d>=0x0&&_0x27307d<0x8){decrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d][_0x5cfac2(0x128)][_0x27307d]),_0x8158d--,_0x27307d++;}_0x8158d=_0x3cae88+0x1,_0x27307d=_0x648819-0x1;while(_0x27307d>=0x0&&_0x8158d<0x8){decrementQueenCount(_0x5b2ed4['rows'][_0x8158d]['cells'][_0x27307d]),_0x8158d++,_0x27307d--;}_0x8158d=_0x3cae88,_0x27307d=_0x648819;while(_0x8158d>=0x0&&_0x27307d>=0x0){decrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d]['cells'][_0x27307d]),_0x8158d--,_0x27307d--;}_0x8158d=_0x3cae88,_0x27307d=_0x648819;while(_0x8158d<0x8&&_0x27307d<0x8){decrementQueenCount(_0x5b2ed4[_0x5cfac2(0x140)][_0x8158d][_0x5cfac2(0x128)][_0x27307d]),_0x8158d++,_0x27307d++;}noReinas++;}document[_0x5cfac2(0x134)](_0x5cfac2(0x13c))[_0x5cfac2(0x120)]=_0x5cfac2(0x121)+noReinas,document['getElementById'](_0x5cfac2(0x12e))['innerHTML']='Reinas\x20colocadas:\x20'+-(noReinas-0x8),noReinas==0x0&&alert(_0x5cfac2(0x122));}function soluciones(_0x5b5315){var _0x111f27=_0x369f,_0xf275e=document[_0x111f27(0x134)](_0x111f27(0x13f));switch(_0x5b5315){case'1':_0xf275e['rows'][0x0][_0x111f27(0x128)][0x3]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x1][_0x111f27(0x128)][0x6][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x2][_0x111f27(0x128)][0x2][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x3][_0x111f27(0x128)][0x7][_0x111f27(0x12b)]='background-image:\x20url(./img/reina.png);\x20background-size:cover;',_0xf275e['rows'][0x4]['cells'][0x1]['style']=_0x111f27(0x131),_0xf275e['rows'][0x5][_0x111f27(0x128)][0x4][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x6][_0x111f27(0x128)][0x0][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x7][_0x111f27(0x128)][0x5][_0x111f27(0x12b)]=_0x111f27(0x131);var _0xd471a6=0x0;document['getElementById'](_0x111f27(0x13c))[_0x111f27(0x120)]=_0x111f27(0x121)+_0xd471a6,document[_0x111f27(0x134)](_0x111f27(0x12e))[_0x111f27(0x120)]=_0x111f27(0x127)+-(_0xd471a6-0x8);break;case'2':_0xf275e['rows'][0x0][_0x111f27(0x128)][0x4][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x1][_0x111f27(0x128)][0x1][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x2][_0x111f27(0x128)][0x3][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e['rows'][0x3][_0x111f27(0x128)][0x6][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x4][_0x111f27(0x128)][0x2]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x5][_0x111f27(0x128)][0x7][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x6]['cells'][0x5][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x7][_0x111f27(0x128)][0x0][_0x111f27(0x12b)]=_0x111f27(0x131);var _0xd471a6=0x0;document[_0x111f27(0x134)](_0x111f27(0x13c))[_0x111f27(0x120)]='Reinas\x20por\x20colocar:\x20'+_0xd471a6,document['getElementById'](_0x111f27(0x12e))[_0x111f27(0x120)]=_0x111f27(0x127)+-(_0xd471a6-0x8);break;case'3':_0xf275e[_0x111f27(0x140)][0x0][_0x111f27(0x128)][0x3][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x1][_0x111f27(0x128)][0x1]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x2][_0x111f27(0x128)][0x6][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e['rows'][0x3][_0x111f27(0x128)][0x2]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x4][_0x111f27(0x128)][0x5]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x5]['cells'][0x7]['style']='background-image:\x20url(./img/reina.png);\x20background-size:cover;',_0xf275e['rows'][0x6][_0x111f27(0x128)][0x4]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x7][_0x111f27(0x128)][0x0][_0x111f27(0x12b)]='background-image:\x20url(./img/reina.png);\x20background-size:cover;';var _0xd471a6=0x0;document[_0x111f27(0x134)]('reinasPorColocar')[_0x111f27(0x120)]=_0x111f27(0x121)+_0xd471a6,document['getElementById'](_0x111f27(0x12e))['innerHTML']='Reinas\x20colocadas:\x20'+-(_0xd471a6-0x8);break;case'4':_0xf275e[_0x111f27(0x140)][0x0][_0x111f27(0x128)][0x3][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x1][_0x111f27(0x128)][0x5][_0x111f27(0x12b)]='background-image:\x20url(./img/reina.png);\x20background-size:cover;',_0xf275e[_0x111f27(0x140)][0x2][_0x111f27(0x128)][0x7]['style']='background-image:\x20url(./img/reina.png);\x20background-size:cover;',_0xf275e[_0x111f27(0x140)][0x3][_0x111f27(0x128)][0x2][_0x111f27(0x12b)]='background-image:\x20url(./img/reina.png);\x20background-size:cover;',_0xf275e[_0x111f27(0x140)][0x4][_0x111f27(0x128)][0x0]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x5]['cells'][0x6][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x6][_0x111f27(0x128)][0x4]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x7][_0x111f27(0x128)][0x1]['style']=_0x111f27(0x131);break;case'5':_0xf275e[_0x111f27(0x140)][0x0][_0x111f27(0x128)][0x2][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x1][_0x111f27(0x128)][0x5][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x2][_0x111f27(0x128)][0x7]['style']=_0x111f27(0x131),_0xf275e['rows'][0x3][_0x111f27(0x128)][0x0][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e['rows'][0x4][_0x111f27(0x128)][0x3][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x5][_0x111f27(0x128)][0x6][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x6][_0x111f27(0x128)][0x4][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x7][_0x111f27(0x128)][0x1][_0x111f27(0x12b)]='background-image:\x20url(./img/reina.png);\x20background-size:cover;';var _0xd471a6=0x0;document[_0x111f27(0x134)]('reinasPorColocar')[_0x111f27(0x120)]=_0x111f27(0x121)+_0xd471a6,document[_0x111f27(0x134)](_0x111f27(0x12e))[_0x111f27(0x120)]=_0x111f27(0x127)+-(_0xd471a6-0x8);break;case'6':_0xf275e[_0x111f27(0x140)][0x0][_0x111f27(0x128)][0x4]['style']=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x1]['cells'][0x2][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x2][_0x111f27(0x128)][0x7][_0x111f27(0x12b)]='background-image:\x20url(./img/reina.png);\x20background-size:cover;',_0xf275e[_0x111f27(0x140)][0x3]['cells'][0x3][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x4]['cells'][0x6][_0x111f27(0x12b)]='background-image:\x20url(./img/reina.png);\x20background-size:cover;',_0xf275e[_0x111f27(0x140)][0x5][_0x111f27(0x128)][0x0][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e[_0x111f27(0x140)][0x6]['cells'][0x5][_0x111f27(0x12b)]=_0x111f27(0x131),_0xf275e['rows'][0x7]['cells'][0x1][_0x111f27(0x12b)]=_0x111f27(0x131);var _0xd471a6=0x0;document[_0x111f27(0x134)](_0x111f27(0x13c))[_0x111f27(0x120)]='Reinas\x20por\x20colocar:\x20'+_0xd471a6,document[_0x111f27(0x134)](_0x111f27(0x12e))[_0x111f27(0x120)]=_0x111f27(0x127)+-(_0xd471a6-0x8);break;default:alert('Solucion\x20no\x20disponible');break;}}function incrementQueenCount(_0x3955d4){var _0x32debd=_0x369f,_0x4d0862=parseInt(_0x3955d4[_0x32debd(0x141)](_0x32debd(0x11f))||'0');_0x4d0862++,_0x3955d4[_0x32debd(0x13e)](_0x32debd(0x11f),_0x4d0862[_0x32debd(0x132)]()),_0x4d0862==0x1&&(_0x3955d4[_0x32debd(0x12b)]['backgroundColor']=_0x32debd(0x130));}function decrementQueenCount(_0x166777){var _0x925d8d=_0x369f,_0x435c73=parseInt(_0x166777[_0x925d8d(0x141)]('data-queen-count')||'0');_0x435c73--,_0x166777['setAttribute'](_0x925d8d(0x11f),_0x435c73[_0x925d8d(0x132)]()),_0x435c73==0x0&&(_0x166777['setAttribute'](_0x925d8d(0x138),_0x925d8d(0x123)),_0x166777['style']['backgroundColor']='');}function resetBoard(){var _0x27632c=_0x369f;location[_0x27632c(0x137)](!![]);}function _0x369f(_0x59a255,_0x3f1834){var _0x1776ab=_0x1776();return _0x369f=function(_0x369fb1,_0x2e800b){_0x369fb1=_0x369fb1-0x11e;var _0x5afb84=_0x1776ab[_0x369fb1];return _0x5afb84;},_0x369f(_0x59a255,_0x3f1834);}document[_0x188d5f(0x134)](_0x188d5f(0x11e))[_0x188d5f(0x124)](_0x188d5f(0x129),resetBoard);function _0x1776(){var _0x4c6dff=['rowIndex','reinasPorColocar','1348404WzdWUa','setAttribute','tabla','rows','getAttribute','parentElement','resetButton','data-queen-count','innerHTML','Reinas\x20por\x20colocar:\x20','Felicidades,\x20has\x20ganado','colocarReina(this)','addEventListener','12aodbpA','535811qSlyMA','Reinas\x20colocadas:\x20','cells','click','3480nudleS','style','17559XBQZga','767711dfxnZb','reinasColocadas','499644GcPeBJ','#ff0000','background-image:\x20url(./img/reina.png);\x20background-size:cover;','toString','cellIndex','getElementById','1039000viSrTt','131859HKVyFY','reload','onclick','backgroundImage','removeAttribute'];_0x1776=function(){return _0x4c6dff;};return _0x1776();}