
  const courses = [
    {
      title: "Public Policy",
      tutor: "Emmanuel Uzuku",
      description: "Explore how governments make decisions and the processes behind policy formulation."
    },
    {
      title: "Introduction to IR",
      tutor: "Mabani Gidado",
      description: "A foundational look at international relations theories and global diplomacy."
    },
    {
      title: "Nigeria Government & Politics",
      tutor: "Zack Jackson",
      description: "Understand Nigeria’s political structure, its history, and current challenges."
    },
    {
      title: "Comparative Politics",
      tutor: "Oumar Presr",
      description: "Compare political systems across the world and how different institutions operate."
    }
  ];

  function openModal(index) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").innerText = courses[index].title;
    document.getElementById("modal-tutor").innerText = "Tutor: " + courses[index].tutor;
    document.getElementById("modal-description").innerText = courses[index].description;
    modal.style.display = "block";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  function payNow() {
    alert("Redirecting to payment gateway...");
    // Here you'd redirect to your payment processor
  }

  // Close modal if user clicks outside the modal box
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      closeModal();
    }
  }


  function openBookingModal() {
  document.getElementById('booking-modal').style.display = 'block';
}

function closeBookingModal() {
  document.getElementById('booking-modal').style.display = 'none';
}



function payNow() {
  let handler = PaystackPop.setup({
    key: 'pk_test_f22927a86d90ab070956aa5591c5297caecb50c4', // Replace with your Paystack public key
    email: 'customer@example.com', // You can capture this dynamically
    amount: 500000, // Amount in kobo (₦5,000 = 500000 kobo)
    currency: 'NGN',
    ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference number
    callback: function(response) {
      alert('Payment successful. Transaction reference: ' + response.reference);
      // Here you can redirect to a thank you page or update UI
    },
    onClose: function() {
      alert('Payment cancelled.');
    }
  });
  handler.openIframe();
}
