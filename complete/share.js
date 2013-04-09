window.addEventListener("load", function(e) { 
				document.addEventListener("webworksready", function(){

					//console.log(community.deviceInfo.getModelNumber());					
					function shareTextMockingSelection(string) {
					    var request = {
					        action : 'bb.action.SHARE',
					        mime : 'text/plain',
					        data : string,
					        target_type: ["APPLICATION", "VIEWER", "CARD"]
					    };
					
					    blackberry.invoke.card.invokeTargetPicker(request, "Sharing Todo Item", onInvokeSuccess, onInvokeError);
					}
					
					function onInvokeSuccess(){
						console.log('successful invoke');
					}
					
					function onInvokeError(e){
						console.log('invoke failed. Reason: ' + e);
					}
					
					document.getElementById('share').addEventListener('click',function(){
						shareTextMockingSelection();
					});
				});
			});