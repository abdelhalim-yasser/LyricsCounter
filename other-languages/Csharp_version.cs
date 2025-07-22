using System;
using System.Text.RegularExpressions;


class CountWord {
	static void Main() {

		Console.Write("Paste your lyrics here  (Just in one line not in many lines)...  ");
		string lyrics = Console.ReadLine().ToLower().Trim();

		Console.Write("Enter the word to count ");
		string word = Console.ReadLine().ToLower().Trim();

		countWord(word, lyrics);
	}

	public static void countWord(string word, string lyrics) {
		int count = 0;

		string[] words = Regex.Replace(lyrics, @"[^\p{IsArabic}\s]", "").Split(new[] { ' ', '\t', '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries);

		foreach(string w in words)
			if(w.Equals(word))
				count++;


		Console.WriteLine("The word " + word + " appears " + count + " times in the lyrics.");
	}
}
