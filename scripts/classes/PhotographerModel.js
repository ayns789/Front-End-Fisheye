export default class PhotographerModel {
    constructor(data){
        this._id = data.id;
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._portrait = data.portrait;
        this._price = data.price;
    }

    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get city(){
        return this._city;
    }
    get country(){
        return this._country;
    }
    get tagline(){
        return this._tagline;
    }
    get portrait(){
        return this._portrait;
    }
    get price(){
        return this._price;
    }
}

// export default PhotographerModel;
// export {PhotographerModel};
// module.exports.PhotographerModel = PhotographerModel;