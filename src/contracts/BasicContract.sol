pragma solidity ^0.5.8;

contract BasicContract {
    uint public menCout;
    struct Men {
        string name;
        uint age;
    }
    mapping (uint=> Men) public man;
    constructor(string memory _name, uint _age) public {
        man[menCout].name = _name;
        man[menCout].age = _age;
        menCout++;
    }
    function addMen(string memory _name, uint _age) public {
        man[menCout].name = _name;
        man[menCout].age = _age;
        menCout++;
    }
}
