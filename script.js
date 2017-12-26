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

	function encrypt(plaintext, key){
		/*
		** Takes a plaintext number and a key number and returns their sum
		** Returns: an integer
		*/
		return (plaintext + key) % 26;
 	}

 	function decrypt(ciphertext, key){
 		/*
 		** Takes a ciphertext number and a key number and returns their differnce
 		** Returns: an integer
 		*/

 		if( ciphertext - key < 0){
 			return (ciphertext - key + 26) % 26; 
 		}
 		else{
 			return (ciphertext - key) % 26;
 		}
 	}

});