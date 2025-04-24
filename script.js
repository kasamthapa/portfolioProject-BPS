$(document).ready(function () {
    console.log("jQuery loaded and document ready");

    // Blog post data
    const blogPosts = [
        {
            id: 1,
            title: "Rebuilding Nepal’s Education: Empowering Students to Thrive",
            date: "April 20, 2025",
            image: "/portfolioProject-BPS/images/blog1.jpeg",
            alt: "Nepal Education Reform",
            summary: "Nepali college students face outdated systems, but with project-based learning, mentorships, and non-credit courses, we’re empowering them to build confidence and skills.",
            content: "There’s a lot of noise lately about how Nepali college students “waste” their 4 years — not learning, not building, not asking the right questions.<br><br>Yes, I’ve seen that.<br>But I’ve also seen something else.<br><br>Students who walk into our classrooms with no digital foundation — not even basic typing skills.<br>Students who’ve never been taught how to learn — only how to pass.<br>Students with curiosity crushed by outdated syllabi and rote lectures.<br><br>And yet — they want to grow. They want to build.<br>They’re just waiting for someone to give them the space, the tools, and the belief.<br><br>So instead of shaming them, here’s what we’ve built:<ul><li>Project-Based Learning from Year 1</li><li>Industry Mentorships with real engineers and founders</li><li>Non-Credit Courses (NCC): AI, Full Stack, Mobile Dev — every Sunday</li><li>Hackathons & Startup Labs where they build to learn</li><li>Portfolio Reviews & Soft Skills to prepare for life beyond the classroom</li></ul><br>Are all students excelling? No.<br>Are many transforming? Absolutely.<br><br>This isn’t just about coding. It’s about confidence, character, and community.<br><br>Let’s move the conversation from judging students to rebuilding the system.<hr><br>If you’re an educator, employer, or mentor — let’s collaborate.<br>Let’s create an ecosystem where students don’t just pass — they thrive."
        },
        {
            id: 2,
            title: "Revolutionizing Education: The Role of Digital Policy",
            date: "March 15, 2025",
            image: "/portfolioProject-BPS/images/blog2.webp",
            alt: "Revolutionizing Education",
            summary: "Digital policies can bridge Nepal’s urban-rural education gap by enabling accessible platforms, teacher training, and affordable technology, as seen in initiatives like KMC LMS.",
            content: "Education in Nepal is at a crossroads. While urban schools boast modern facilities, rural classrooms often lack basic resources—textbooks, trained teachers, or even electricity. This urban-rural divide perpetuates inequality, leaving millions of students unprepared for a digital future.<br><br>I’ve seen students in remote areas eager to learn but limited by outdated systems. I’ve also seen the transformative power of technology when it’s accessible.<br><br>Digital policies are the key to change. They can ensure equitable access to education through:<ul><li>Online Learning Platforms like KMC LMS, offering free courses to rural students</li><li>Teacher Training Programs to integrate tech in classrooms</li><li>Subsidized Devices like low-cost tablets for schools</li><li>Internet Expansion to connect remote areas</li><li>Open Educational Resources (OER) for free, quality content</li></ul><br>At Kathmandu Model College, our LMS has reached 5,000 students, with 70% from rural areas. Teachers now use digital tools to engage students, and attendance has risen by 20%. But this is just the start.<br><br>Scaling these efforts requires policy commitment. Without investment in infrastructure and training, technology remains a privilege, not a right.<br><br>Let’s shift the narrative from access to empowerment. Digital education isn’t about gadgets—it’s about opportunity, equity, and hope.<hr><br>Policymakers, educators, and tech leaders—join us. Let’s craft policies that make every classroom a gateway to the future."
        },
        {
            id: 3,
            title: "Innovation in Nepal: Building a Tech Ecosystem",
            date: "February 20, 2025",
            image: "/portfolioProject-BPS/images/blog3.webp",
            alt: "Innovation in Nepal",
            summary: "Projects like AgroConnect and HealthScan show Nepal’s tech potential, but building a sustainable ecosystem requires funding, incubators, and industry-academia collaboration.",
            content: "Nepal’s tech scene is buzzing with potential. From Kathmandu’s startups to rural innovators, young minds are solving real problems. Yet, too often, their ideas stall—lacking funds, mentorship, or a platform to scale.<br><br>I’ve witnessed this firsthand. A student with a brilliant app idea but no coding skills. A farmer with a supply chain solution but no investor. The spark is there, but the ecosystem isn’t.<br><br>We’re changing that through projects like:<ul><li>AgroConnect, linking farmers to markets via mobile apps</li><li>HealthScan, using AI on Raspberry Pi for affordable diagnostics</li><li>Tech Incubators at colleges, mentoring 50+ startups</li><li>Hackathons fostering collaboration among coders and entrepreneurs</li><li>Industry Partnerships to fund and scale student projects</li></ul><br>AgroConnect has empowered 2,000 farmers, increasing incomes by 15%. HealthScan’s pilot reached 10 villages, diagnosing 500 patients. These wins prove innovation thrives when supported.<br><br>But challenges remain—limited venture capital, fragmented policies, and a skills gap. To build a tech ecosystem, we need investment, training, and collaboration between universities and industry.<br><br>Let’s stop waiting for Silicon Valley. Nepal’s future is in our hands—built by our innovators, for our people.<hr><br>Investors, educators, and founders—let’s connect. Together, we can make Nepal a hub of innovation."
        }
    ];

    // Check if on blog.html and load post
    if (window.location.pathname.includes("blog.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get("id"));
        const post = blogPosts.find(p => p.id === postId);

        if (post) {
            $(".post-title").text(post.title);
            $(".post-date").text(post.date);
            $(".post-image").attr("src", post.image).attr("alt", post.alt);
            $(".post-content").html(post.content);
            // Update meta tags for SEO
            $("meta[name='description']").attr("content", post.summary);
            $("title").text(`Binod Paudyal | ${post.title}`);
        } else {
            $(".blog-post-content").html("<h1>Post Not Found</h1><p>Sorry, the blog post could not be found.</p>");
        }
    }

    // Handle contact form submission via AJAX
    $("#contact-form").on("submit", function (e) {
        e.preventDefault();
        var $form = $(this);
        var $responseDiv = $form.find(".form-response");
        $responseDiv.text("Sending...").css("color", "#333");

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyEEvzeNgmBYCTZN9gT35tWG7El-wB-x4F_8pjHaPvo-GEnXzPUEIKaaW0sCe62lboi/exec",
            type: "POST",
            data: $form.serialize(),
            success: function (response) {
                if (response === "Success") {
                    $responseDiv.text("Message sent successfully!").css("color", "green");
                    $form[0].reset();
                } else {
                    $responseDiv.text("Error sending message. Please try again.").css("color", "red");
                }
            },
            error: function (xhr, status, error) {
                $responseDiv.text("Error: Unable to send message. Please try again later.").css("color", "red");
            }
        });
    });

    // Sticky navbar and scroll-up button
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        console.log("Menu link clicked:", $(this).attr("href"));
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active").removeClass("fa-times").addClass("fa-bars");
    });

    $('.menu-btn').click(function () {
        console.log("Menu button clicked, active:", $('.navbar .menu').hasClass("active"));
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        if ($('.menu-btn i').hasClass("active")) {
            $('.menu-btn i').removeClass("fa-bars").addClass("fa-times");
        } else {
            $('.menu-btn i').removeClass("fa-times").addClass("fa-bars");
        }
    });

    // Typing animation and Owl Carousel
    console.log("Pathname:", window.location.pathname);
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "/portfolioProject-BPS/") {
        console.log("Inside index.html, root path, or portfolioProject-BPS condition");

        // Initialize Typed.js animations
        try {
            var typed1 = new Typed(".typing", {
                strings: ["Educator", "AI Researcher", "Entrepreneur"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
            console.log("Typed.js animation 1 initialized");

            var typed2 = new Typed(".typing-2", {
                strings: ["Educator", "AI Researcher", "Entrepreneur"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
            console.log("Typed.js animation 2 initialized");
        } catch (error) {
            console.error("Typed.js error:", error);
        }

        // Initialize Owl Carousel
        try {
            $('.carousel').owlCarousel({
                margin: 20,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 3 }
                }
            });
            console.log("Owl Carousel initialized");
        } catch (error) {
            console.error("Owl Carousel error:", error);
        }
    }
});