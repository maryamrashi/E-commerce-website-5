// CartPage.js
import { BsCartPlus, BsCurrencyDollar } from 'react-icons/bs';
import { HiBadgeCheck } from "react-icons/hi";
export default function CartPage() {
  const productPrice = 29.99; // Example product price

  return (
    <div className="flex flex-col items-center justify-center mt-20">
<HiBadgeCheck className='text-sky-600 text-6xl mb-8  transition-opacity duration-1000 ease-in-out delay-300 opacity-100' />


      <div className="flex items-center space-x-2 mb-4">
      
        <BsCartPlus size={24} className="text-green-500" />
        <h2 className="text-2xl font-semibold border-b-2 border-black pb-1">
          Added to Cart
        </h2>
      </div>
      <p className="text-center font-serif mt-8 text-lg text-gray-900">
        Your item has been successfully added to the cart. You can proceed to checkout or continue shopping.
      </p>
      
      <div className="flex items-center space-x-2 mt-4">
        <BsCurrencyDollar size={20} className="text-gray-900" />
        <span className="text-xl font-bold text-gray-900">{productPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}





// It seems like you're encountering an issue with GitHub where the error message "no comment change working treatly" appears, and you're asking how to delete your previous comments or avoid this issue when creating a new repository.

// Here are steps you can follow to resolve your issue:

// 1. Deleting Comments from a Pull Request (PR) or Issue on GitHub:
// If the error is related to comments you made on a pull request or issue, here’s how you can delete or edit your comments:

// Delete or Edit Comments:

// Go to the pull request or issue where you've posted the comment.
// Find the comment you want to remove or edit.
// Hover over the comment, and you'll see an "..." menu (three dots) appear on the right side of the comment.
// Click on the "..." menu, and you'll see options to either:
// Edit the comment.
// Delete the comment.
// Delete a Comment (if you have permission):

// If you have permission (or you're the owner of the repository or issue), you can click on the "Delete" option to remove your comment entirely.
// 2. Fixing the Error (if related to GitHub Actions or Commit Messages):
// If the error you're encountering is related to a commit or GitHub Actions, here's how to fix or avoid it:

// A. Check Commit Messages:
// Ensure that your commit message is valid. GitHub might have validation rules for commit messages depending on your repository setup (e.g., if you're using a GitHub Action that requires a specific format).

// To fix invalid commit messages, you can amend your previous commit:

// bash
// Copy code
// git commit --amend
// This allows you to change the commit message. Afterward, push the changes:

// bash
// Copy code
// git push --force
// B. GitHub Actions:
// If you're using GitHub Actions, and the error is caused by a GitHub Action trying to run on a specific event (e.g., on push or PR), check your .github/workflows configuration for errors or any validation rules that might be causing this message to appear.

// Review your .yml files in the .github/workflows/ directory and ensure they don't have any syntax or logic errors.
// If the error is happening on a particular GitHub Action, you can check the Actions tab in your repository to look at the logs and identify any specific errors.
// 3. Creating a New Repository:
// If you're worried about this error appearing in a new repository, it will not carry over unless you're using the same workflows or pre-existing configurations that are causing the error. Here's what you should do for a fresh repository:

// Create a new repository: Go to GitHub and click on the + sign in the top-right corner, then choose "New repository."
// Set up a new repository: You can follow the standard steps for setting up a new repository without carrying over any errors from the previous one.
// Add workflows carefully: If you want to set up any GitHub Actions or workflows, make sure you double-check that they’re configured correctly and don’t cause issues like the one you're experiencing.
// To avoid future errors:
// Double-check commit messages and formats.
// Test workflows locally or in a private repo before pushing them to public repositories.
// 4. Contact GitHub Support:
// If you're still unsure about the issue and it's related to GitHub's internal systems, you can contact GitHub support directly for help with the error. They can provide more specific insights into your error message and how to resolve it.

// Let me know if you're dealing with a specific issue related to GitHub Actions, commit messages, or if you're facing any problems while creating the repository.



