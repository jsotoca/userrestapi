let _AuthService = null;

class AuthController {
    constructor({AuthService}){
        _AuthService = AuthService;
    }
    async signUp(req,res){
        const {body} = req;
        return res.json({
            ok:true,
            data: await _AuthService.signUp(body)
        });
    }
    async signIn(req,res){
        const {body} = req;
        return res.json({
            ok:true,
            data: await _AuthService.signIn(body)
        });
    }
}   

module.exports = AuthController;