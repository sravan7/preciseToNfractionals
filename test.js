const presicer = require('./index')
const assert = require('assert')
let tests = [];
const testFor = (name,callback) =>{
    tests.push({name,callback});
}
const run = ()=>{
    console.log('🚦___________🚛__🚎__🚜________🚑__🚓________🚌__________🛺__🚲__________🏎 ')
    tests.forEach(({name,callback})=>{
        try{
            callback()
            console.log('✅',name)
        }
        catch(err){
            console.log('❌',name);
            console.log(err.stack);
        }

    })
}

testFor('shoud return 99.99',()=>{
    assert.strictEqual(presicer(99.99,2),99.99)
})
testFor('shoud return -99.99',()=>{
    assert.strictEqual(presicer(-99.99,2),-99.99)
})

testFor('shoud return undefined for number negative digits negative ',()=>{
    assert.strictEqual(presicer(-99.99,-1),undefined)
})
testFor('shoud return undefined for number positive digits negative ',()=>{
    assert.strictEqual(presicer(99.99,-1),undefined)
})

run()