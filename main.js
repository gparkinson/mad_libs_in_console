// alert("I'm working in JS") //


function mad_libs() {
 var storytext = "There were 15 " +
					get_noun(2) +
					" " +
					get_gerund() +
				   "." +
				   " The " +
				   get_noun(2) + 
				   " saw the " +
				   get_noun(1) +
				   " " +
				   get_verb() +
				   "."

document.write(storytext);
}


var verbs = ["eat","sleep","talk","agitate","churn","cry"];
var nouns = [["children",1], ["boy",0], ["tree",0], ["stick",0], ["soil",1], ["sheep",1]]	;

function noun_agreement(wordpair) {
	console.log("wordpair" + wordpair)
	var flag = wordpair[1];
	var word = wordpair[0];
	console.log(flag);
	console.log(word);
	{if (flag == 1)
		{return word;}
		else
		{return word+ "s";}}
	}

function get_noun(count) {
	var nouncount = nouns.length;
	var nounnumber = Math.floor((Math.random() * nouncount));
	console.log("nounnumber " + nounnumber);
	var noun = nouns[nounnumber];
	console.log("noun: "+ noun);
	return noun_agreement(noun);
}

function get_verb() {
    var verbcount = verbs.length;
	var verbnumber = Math.floor((Math.random() * verbcount));
	var verb = verbs[verbnumber];
	console.log("verb: "+ verb);
	return verb;
}

function get_gerund() {
    var verbcount = verbs.length;
    console.log("verbs " + verbs);
	var verbnumber = Math.floor((Math.random() * verbcount));
	var verb = verbs[verbnumber];
	console.log("gerund: "+ verb);
	return verb + "ing";
}

