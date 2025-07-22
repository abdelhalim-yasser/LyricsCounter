import java.util.Scanner;

public class Main
{
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);

		System.out.print("Paste your lyrics here...  ");
		String lyrics = input.nextLine().toLowerCase();

		System.out.print("Enter the word to count ");
		String word = input.nextLine().toLowerCase().trim();

		countWord(word, lyrics);

	}

	public static void countWord(String word, String lyrics) {
		int count = 0;

		String[] words = lyrics.replaceAll("[^\\p{IsArabic}\\s]", "").split("\\s+");

		for(String string : words)
			if(string.equals(word))
				count++;
		
		System.out.println("The word " + word + " appears " + count + "times in the lyrics.");
	}
}