// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Astros Kernel</li><li class="chapter-item expanded "><a href="kernel/index.html"><strong aria-hidden="true">1.</strong> Getting Started</a></li><li class="chapter-item expanded "><a href="kernel/advanced-instructions.html"><strong aria-hidden="true">2.</strong> Advanced Build and Test Instructions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kernel/intel_tdx.html"><strong aria-hidden="true">2.1.</strong> Intel TDX</a></li></ol></li><li class="chapter-item expanded "><a href="kernel/the-framekernel-architecture.html"><strong aria-hidden="true">3.</strong> The Framekernel Architecture</a></li><li class="chapter-item expanded "><a href="kernel/linux-compatibility.html"><strong aria-hidden="true">4.</strong> Linux Compatibility</a></li><li class="chapter-item expanded "><a href="kernel/roadmap.html"><strong aria-hidden="true">5.</strong> Roadmap</a></li><li class="chapter-item expanded affix "><li class="part-title">Astros KSTD</li><li class="chapter-item expanded "><a href="kstd/index.html"><strong aria-hidden="true">6.</strong> An Overview of KSTD</a></li><li class="chapter-item expanded "><a href="kstd/a-100-line-kernel.html"><strong aria-hidden="true">7.</strong> Example: Writing a Kernel in 100 Lines of Safe Rust</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> Example: Writing a Driver in 100 Lines of Safe Rust</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> Soundness Analysis</div></li><li class="chapter-item expanded affix "><li class="part-title">Astros KSDK</li><li class="chapter-item expanded "><a href="ksdk/guide/index.html"><strong aria-hidden="true">10.</strong> KSDK User Guide</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ksdk/guide/why.html"><strong aria-hidden="true">10.1.</strong> Why KSDK</a></li><li class="chapter-item expanded "><a href="ksdk/guide/create-project.html"><strong aria-hidden="true">10.2.</strong> Creating an OS Project</a></li><li class="chapter-item expanded "><a href="ksdk/guide/run-project.html"><strong aria-hidden="true">10.3.</strong> Testing or Running an OS Project</a></li><li class="chapter-item expanded "><a href="ksdk/guide/work-in-workspace.html"><strong aria-hidden="true">10.4.</strong> Working in a Workspace</a></li><li class="chapter-item expanded "><a href="ksdk/guide/advanced_topics.html"><strong aria-hidden="true">10.5.</strong> Advanced Topics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ksdk/guide/intel-tdx.html"><strong aria-hidden="true">10.5.1.</strong> Intel TDX</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="ksdk/reference/index.html"><strong aria-hidden="true">11.</strong> KSDK User Reference</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ksdk/reference/commands/index.html"><strong aria-hidden="true">11.1.</strong> Commands</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ksdk/reference/commands/new.html"><strong aria-hidden="true">11.1.1.</strong> cargo ksdk new</a></li><li class="chapter-item expanded "><a href="ksdk/reference/commands/build.html"><strong aria-hidden="true">11.1.2.</strong> cargo ksdk build</a></li><li class="chapter-item expanded "><a href="ksdk/reference/commands/run.html"><strong aria-hidden="true">11.1.3.</strong> cargo ksdk run</a></li><li class="chapter-item expanded "><a href="ksdk/reference/commands/test.html"><strong aria-hidden="true">11.1.4.</strong> cargo ksdk test</a></li><li class="chapter-item expanded "><a href="ksdk/reference/commands/debug.html"><strong aria-hidden="true">11.1.5.</strong> cargo ksdk debug</a></li></ol></li><li class="chapter-item expanded "><a href="ksdk/reference/manifest.html"><strong aria-hidden="true">11.2.</strong> Manifest</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">How to Contribute</li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> Before You Contribute</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> Code Organization</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> Style Guidelines</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">14.1.</strong> General Guidelines</div></li><li class="chapter-item expanded "><a href="to-contribute/style-guidelines/rust-guidelines.html"><strong aria-hidden="true">14.2.</strong> Rust Guidelines</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.3.</strong> Git Guidelines</div></li></ol></li><li class="chapter-item expanded "><a href="to-contribute/boterinas.html"><strong aria-hidden="true">15.</strong> Boterinas</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.</strong> Community</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">17.</strong> Code of Conduct</div></li><li class="chapter-item expanded affix "><li class="part-title">Request for Comments (RFC)</li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.</strong> RFC Overview</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">18.1.</strong> RFC-0001: RFC Process</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.2.</strong> RFC-0002: Operating System Development Kit (KSDK)</div></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
