pragma solidity ^0.5.8;

contract BasicContract {
    uint public peopleCount;
    struct Person {
        string name;
        uint age;
    }
    mapping (uint=> Person) public people;
    constructor(string memory _name, uint _age) public {
        people[peopleCount].name = _name;
        people[peopleCount].age = _age;
        peopleCount++;
    }
    function addPerson(string memory _name, uint _age) public {
        people[peopleCount].name = _name;
        people[peopleCount].age = _age;
        peopleCount++;
    }
}
