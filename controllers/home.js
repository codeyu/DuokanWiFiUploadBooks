//
//                     Home Controller
//

// =======================================================
//  Dependencies
// =======================================================
    var app = module.app = module.parent.app;

// =======================================================
//  Models
// =======================================================
    // ...
    
// =======================================================
//  Exports
// =======================================================
    module.exports.display = function($){
        $.data.title = 'WiFi 传书'
        $.status('200', 'It\'s OK')
        $.end()
    }