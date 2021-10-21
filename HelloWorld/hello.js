const helloworld = {
    _name: 'Pierce',
    _nicknames: ['Pie','P-unit','Pleasure P'],
    get nicknames() {
        console.log(this._nicknames)
    }
}

helloworld.nicknames
console.log(helloworld)