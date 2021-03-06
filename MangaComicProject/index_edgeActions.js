
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_overlay}","click",function(sym,e){var overlay=sym.getSymbol("overlay");overlay.stop('inactive');sym.stop('overview');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4037,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.getSymbolElement().css({margin:'auto'});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_f1}","click",function(sym,e){var overlay=sym.getSymbol("overlay");overlay.play('f1');sym.stop('overlay');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_f1}","mouseenter",function(sym,e){var currentSym=sym.getSymbol("f1");currentSym.play('over');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_f1}","mouseleave",function(sym,e){var currentSym=sym.getSymbol("f1");currentSym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Loop}","click",function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'm2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",733,function(sym,e){sym.stop();});
//Edge binding end
})("m2");
//Edge symbol end:'m2'

//=========================================================

//Edge symbol: 'overlay'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",800,function(sym,e){sym.stop();sym.getSymbol("content").play('fadeRight');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1467,function(sym,e){sym.stop();sym.getSymbol("content").play('fadeRight');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",533,function(sym,e){sym.getSymbol("content").stop('start');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1200,function(sym,e){sym.getSymbol("content").stop('start');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1933,function(sym,e){sym.getSymbol("content").stop('start');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2199,function(sym,e){sym.stop();sym.getSymbol("content").play('fadeLeft');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2600,function(sym,e){sym.getSymbol("content").stop('start');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2867,function(sym,e){sym.stop();sym.getSymbol("content").play('fadeLeft');});
//Edge binding end
})("overlay");
//Edge symbol end:'overlay'

//=========================================================

//Edge symbol: 'f2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",733,function(sym,e){sym.stop();});
//Edge binding end
})("f2");
//Edge symbol end:'f2'

//=========================================================

//Edge symbol: 'content'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",800,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2533,function(sym,e){sym.stop();});
//Edge binding end
})("content");
//Edge symbol end:'content'

//=========================================================

//Edge symbol: 'm1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",733,function(sym,e){sym.stop();});
//Edge binding end
})("m1");
//Edge symbol end:'m1'

//=========================================================

//Edge symbol: 'f1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",733,function(sym,e){sym.stop();});
//Edge binding end
})("f1");
//Edge symbol end:'f1'

//=========================================================

//Edge symbol: 'glow'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.play(0);});
//Edge binding end
})("spotlight");
//Edge symbol end:'spotlight'
})(jQuery,AdobeEdge,"EDGE-11294651");