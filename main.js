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


function get_noun(count) {
	var nouncount = nouns.length;
	var nounnumber = Math.floor((Math.random() * nouncount));
	var noun = nouns[nounnumber];
	return noun_agreement(noun,count);
}

function get_verb() {
    var verbcount = verbs.length;
	var verbnumber = Math.floor((Math.random() * verbcount));
	var verb = verbs[verbnumber];
	return verb;
}

function get_gerund() {
    var verbcount = verbs.length;
	var verbnumber = Math.floor((Math.random() * verbcount));
	var verb = verbs[verbnumber];
	return verb + "ing";
}

function noun_agreement(wordpair,count) {
	var flag = wordpair[1];
	var word = wordpair[0];
	{if (count == 1) return word}
	{if (flag == 1)
		{return word;}
		else
		{return word+ "s";}}
	}
