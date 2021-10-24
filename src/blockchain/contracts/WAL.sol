// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WackyAlienLeague is ERC721Enumerable, Ownable { 
    using Strings for uint256;    

    uint256 public price = 0.07 ether;     
    uint256 public maxSupply = 10000; 
    uint256 public publicSupply = 9000;
    uint256 public publicMinted;
    uint256 public teamSupply = 500; 
    uint256 public teamMinted;
    uint256 public maxGiftAmount = 500; 
    uint256 public giftedAmount;
    uint256 public buyLimit = 3; 
    //uint256 public whitelistBuyLimit = 3;

    string public baseURI;       
    string public baseExtension;
    string private _contractURI; 
     
    bool public revealed = false;
    bool public isSaleLive = false;
    bool public onlyWhitelist = false;

    mapping(address => bool) public isWhitelisted;
    mapping(address => uint256) public whiteListPurchases;        
    
    constructor() ERC721("Wacky Alien League", "WAL") {} 

    function addToWhitelist(address[] calldata _addresses) external onlyOwner {
        for(uint256 i = 0; i < _addresses.length; i++) {
            address entry = _addresses[i];
            require(entry != address(0), "Address not valid.");
            require(!isWhitelisted[entry], "Address already whitelisted.");

            isWhitelisted[entry] = true;
        }   
    }

    function removeFromWhiteList(address[] calldata _addresses) external onlyOwner {
        for(uint256 i = 0; i < _addresses.length; i++) {
            address entry = _addresses[i];
            require(entry != address(0), "Address not valid.");
            
            isWhitelisted[entry] = false;
        }
    }

    function buy(uint256 _amount) external payable {
        require(isSaleLive, "Sale is not live.");
        require(!onlyWhitelist, "Sale is only available for whitelist.");
        //require(totalSupply() < maxSupply, "All tokens minted.");
        require(publicMinted + _amount <= publicSupply, "Exceeds max supply.");
        require(_amount <= buyLimit, "Exceeds buy limit.");
        require(price * _amount <= msg.value, "Not enough ETH to buy.");
        
        for(uint256 i = 0; i < _amount; i++) {
            publicMinted++;
            _safeMint(msg.sender, totalSupply() + 1);
        }
    }  

    function whiteListBuy(uint256 _amount) external payable {
        require(onlyWhitelist, "Sale is not live.");
        require(isWhitelisted[msg.sender], "Not in the whitelist.");
        //require(totalSupply() < maxSupply, "All tokens minted.");
        require(publicMinted + _amount <= publicSupply, "Exceeds max supply."); 
        require(whiteListPurchases[msg.sender] + _amount <= buyLimit, "Exceeds whitelist allocation.");
        require(price * _amount <= msg.value, "Not enough ETH to buy.");
        
        for (uint256 i = 0; i < _amount; i++) {
            publicMinted++;
            whiteListPurchases[msg.sender]++;
            _safeMint(msg.sender, totalSupply() + 1);
        }
    }

    function airdrop(address[] calldata receivers) external onlyOwner {   
        //require(totalSupply() + receivers.length < maxSupply, "Over max supply.");
        require(giftedAmount + receivers.length <= maxGiftAmount, "Max gift limit reached.");
        
        for (uint256 i = 0; i < receivers.length; i++) {           
            giftedAmount++;
            _safeMint(receivers[i], totalSupply() + 1);
        }
    }
    
    function mintTeam (address _receiver, uint256 _amount) public onlyOwner {
        require(teamMinted + _amount <= teamSupply, "Exceeds the max supply for team.");
        
        for(uint256 i = 0; i < _amount; i++) {
            teamMinted++;
            _safeMint(_receiver, totalSupply() + 1);
        }
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance); 
    }

    function toggleSaleStatus (bool _onlyWhitelist, bool _isSaleLive) public onlyOwner{
        onlyWhitelist = _onlyWhitelist;
        isSaleLive = _isSaleLive;
    }

    function toggleReveal (bool status, string memory _newURI,string memory _newExtension) public onlyOwner{
        revealed = status;
        baseURI = _newURI; 
        baseExtension = _newExtension;
    }

    function setContractURI(string calldata URI) external onlyOwner {
        _contractURI = URI;
    }

    function tokenURI(uint256 tokenId) public view override(ERC721) returns (string memory) {
        require(_exists(tokenId), "Cannot query non-existent token");

        if(!revealed) {
            return baseURI;
        }
        
        return string(abi.encodePacked(baseURI, tokenId.toString(),baseExtension));
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function maxBuyLimit(uint256 _newbuyLimit) public onlyOwner{
        buyLimit = _newbuyLimit;
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }
}