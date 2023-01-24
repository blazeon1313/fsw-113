// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
var reportedBy = document.querySelector("#reportedBy");
var itemSelect = document.querySelector("#system");
var subSys = document.querySelector("#subSystem");
var bugDesc = document.querySelector("#bugDesc");
var listWrapper = document.querySelector("#listWrapper");

//let bugCount = 0

// This constructor should be set up to accept the four user-input values from index.html: 
// reportedBy, system, subSystem, and bugDesc
class Bug {
    static bugCount = 1;
    constructor(reportedBy, system, subSystem, bugDesc) {
        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc;
        this.bugID = ++this.constructor.bugCount;
    }

// Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
// It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
    addBug() {        
        let report = document.createElement('div');
        report.setAttribute('class', 'reportDiv');
        report.id = `bug${this.bugID}`

        let byWho = document.createElement('p');
        byWho.setAttribute("class", "content")
        byWho.textContent = `Reported by: ${this.reportedBy}`;

        let issueArea = document.createElement('p');
        issueArea.setAttribute("class", "content")
        issueArea.textContent = `System: ${this.system}/${this.subSystem}`;

        let issueReport = document.createElement('p');
        issueReport.setAttribute("class", "content")
        issueReport.textContent = `${this.bugDesc}`;

        let buttonBox = document.createElement('div');
        buttonBox.setAttribute('class', 'buttonBox');

        let solvedBtn = document.createElement('div');
        solvedBtn.innerHTML += '&#10004;';
        solvedBtn.setAttribute('class', 'solvedBtn');
        solvedBtn.addEventListener('click', () => {
            this.resolveBug(this.bugID)
        });

        let delBtn = document.createElement('div');
        delBtn.innerHTML += '&#10006;';
        delBtn.setAttribute('class', 'delBtn');
        delBtn.addEventListener('click', () => {
            this.deleteBug(this.bugID)
        });

        buttonBox.append(solvedBtn, delBtn);

        report.append(byWho, issueArea, issueReport, buttonBox);
        listWrapper.appendChild(report);

    }

// Create code that will remove the appropriate bug from the DOM. 
// You may need to Google how to remove an element from the DOM.
    deleteBug(id) {
        document.querySelector(`#bug${id}`).remove()  
    }

// Create code that changes the appropriate bug report to a darker color
    resolveBug(id) {
      document.querySelector(`#bug${id}`).style.backgroundColor = "darkGreen";
    }
}

// Create code that instantiates the Bug class with the data input by the 
// user in the index.html form. Then call the method to add the new bug report.
function reportBug(e) {
    const select = itemSelect.options[itemSelect.selectedIndex].text;
    const sub = subSys.options[subSys.selectedIndex].text;
    const bug = new Bug(reportedBy.value, select, sub, bugDesc.value);
    bug.addBug();
}
