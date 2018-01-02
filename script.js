$(document).ready(function(){

	function get_message(){
		/*
		** Returns the text from the message textbox
		** Returns: a string
		*/
		return $("#msg1").val();
	}

	function get_key(){
		/*
		** Returns the text from the keyword textbox
		** Returns: a string
		*/
		return $('#key').val();
	}

	function clean_key(key){
		/*
		** Takes user inputted key and makes lower case and removes punctuation, numbers, spaces.
		** Examples: "Hello! This. 3 is a test._ 4" => hellothisisatest or "Ace" => ace
		** Returns: a string
		*/

		key = key.replace(/[^\w\s]|_|\d+/g, ''); //Removes punctuation, numbers
		key = key.split(" ").join(''); //Removes spaces
		key = key.toLowerCase(); //Makes lower case

		return key;
	}

	function encrypt(plaintext, key){
		/*
		** Takes a plaintext number and a key number and returns their sum
		** Returns: an integer
		*/
		return (plaintext + key) % 26;
 	}

 	function decrypt(ciphertext, key){
 		/*
 		** Takes a ciphertext number and a key number and returns their difference
 		** Returns: an integer
 		*/

 		if( ciphertext - key < 0){
 			return (ciphertext - key + 26) % 26; 
 		}
 		else{
 			return (ciphertext - key) % 26;
 		}
 	}

 	function cycle(func, message, key){
 		/*
 		** Goes through each character of the message, either plaintext or ciphertext, 
 		** calls func, either encrypt or decrypt, on each character with key, returns encrypted or decrypted message
  		** Returns: a string
 		*/

 		var lower_case = "abcdefghijklmnopqrstuvwxyz";
 		var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 		var code = "";

 		for(let i = 0; i < message.length; i++){

 			if(lower_case.indexOf(message[i]) !== -1){
 				num = func(lower_case.indexOf(message[i]), lower_case.indexOf(key[i % key.length]));
 				code += lower_case[num];
 			}
 			else if(upper_case.indexOf(message[i]) !== -1){
 				num = func(upper_case.indexOf(message[i]), lower_case.indexOf(key[i % key.length]));
 				code += upper_case[num];
 			}
 			else{
 				code += message[i];
 			}
 		}

 		return code;
 	}

 	//When encrypt button is clicked
 	$("#encode").click(function(){

 		var encrypt_message = '';
 		var message = get_message();
 		var key = get_key(); 		
 		key = clean_key(key); 		

 		if(key != ""){ //If key is empty plaintext is displayed
 			encrypt_message = cycle(encrypt, message, key);
 		}
 		else{
 			encrypt_message = message;
 		}

 		//Display encrypted message
 		$("#msg2").val(encrypt_message);
 	});

 	//When decrypt button is clicked
 	$("#decode").click(function(){

 		var decrypt_message = '';
 		var message = get_message();
 		var key = get_key(); 		
 		key = clean_key(key); 		

 		if(key != ""){ //If key is empty ciphertext is displayed
 			decrypt_message = cycle(decrypt, message, key);
 		}
 		else{
 			decrypt_message = message;
 		}

 		//Display decrypted message
 		$("#msg2").val(decrypt_message);
 	});

});