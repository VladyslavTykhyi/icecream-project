var modalBM=document.querySelector("[data-buy-now-modal]"),overlayBM=document.querySelector("[data-buy-now-overlay]"),openModalBtnBM=document.querySelector("[data-buy-now-open]"),closeModalBtnBM=document.querySelector("[data-buy-now-close]"),openModalBM=function(){modalBM.classList.remove("is-hidden"),overlayBM.classList.remove("is-hidden")};openModalBtnBM.addEventListener("click",openModalBM,{passive:!0});var closeModalBM=function(){modalBM.classList.add("is-hidden"),overlayBM.classList.add("is-hidden")};closeModalBtnBM.addEventListener("click",closeModalBM,{passive:!0}),document.addEventListener("keydown",(function(e){"Escape"!==e.key||modalBM.classList.contains("is-hidden")||closeModalBM()}),{passive:!0});
//# sourceMappingURL=index.39c1d842.js.map