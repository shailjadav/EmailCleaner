function deleteEmailsFromSpecificSenders() {
  // Add the email addresses you want to delete emails from
  var emailAddresses = [
  'bvpuvar@iitgn.ac.in',
  'robotics-worldwide@lists.kit.edu',
  'cultural.secretary@iitgn.ac.in',
  'general.secretary@iitgn.ac.in',
  'welfare.secretary@iitgn.ac.in',
  'pdc.secretary@iitgn.ac.in',
  'art@iitgn.ac.in',
  'academic.secretary@iitgn.ac.in',
  'sports@iitgn.ac.in',
  'mess.secy@iitgn.ac.in',
  'amalthea@iitgn.ac.in',
  'broadcast@iitgn.ac.in',
  'cds@iitgn.ac.in',
  'librarian@iitgn.ac.in',
  ];

  // Iterate over each email address
  for (var i = 0; i < emailAddresses.length; i++) {
    var emailAddress = emailAddresses[i];

    // Search for emails from the specified email address
    var searchQuery = 'from:' + emailAddress + ' before:2023-05-11';
    var threads = GmailApp.search(searchQuery);

    // Loop to search and delete emails in batches
    while (threads.length > 0) {
      // Delete all found email threads
      for (var j = 0; j < threads.length; j++) {
        threads[j].moveToTrash();
      }

      // Update the search query to find older emails
      var lastThreadDate = threads[threads.length - 1].getLastMessageDate();
      searchQuery = 'from:' + emailAddress + ' before:' + formatDate(lastThreadDate);
      threads = GmailApp.search(searchQuery);
    }
  }
}

// Helper function to format the date for Gmail search query
function formatDate(date) {
  var yyyy = date.getFullYear();
  var mm = date.getMonth() + 1; // January is 0
  var dd = date.getDate();

  if (mm < 10) {
    mm = '0' + mm;
  }
  if (dd < 10) {
    dd = '0' + dd;
  }

  return yyyy + '-' + mm + '-' + dd;
}
