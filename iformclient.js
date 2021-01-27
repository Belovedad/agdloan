/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 13/12/2016       Mohit Sharma            Bug 66247 - Validation on submit button in ibps mobile form required
 * 07/05/2018       Gaurav Sharma           Bug 77543 - Events and webservice functionality not working in iform not getting output.
 * 06/11/2018       Gaurav                  Bug 81232 - Digit Grouping not working in setValues() API
 * 12/12/2018       Aman Khan               Bug 81913 - In style3 TextBox,Label name not aligned properly.
 * 12/02/2019       Aman Khan               Bug 83038 - We need to open the URL in the application on click of labels.
 * 21/02/2019       Gaurav                  Bug 83221 - Not able to set value in editable combo using setValues
 * 26/02/2019       Abhishek                Bug 83310 - Removal of RTE Features
 * 26/04/2019       Aman Khan               Bug 84373 - unable to set date in ipad
 * 30/04/2019       Aman Khan               Bug 84407 - If the type of field in a comboBox is a DropDown then it is not getting populated through code whereas a DropDownList is workking fine. Kindly check this.
 * 28/05/2019       Gaurav                  Bug 84949 - mandatory validation is not removed if data is set using API.
 * 28/05/2019       Abhishek                Bug 84964 - Custom alert on cross icon of grid
 * 12/07/2019       Abhishek                Bug 85595 - Suppress format tools in Richtext editor Initially 
 */


function customValidation(op){
     switch (op) {
        case 'S':
            
            break;
        case 'I':
            
            break;
        case 'D':
           
            break;
        default:
            break;
    }
    
    return true;
}
function savefunction(){

}

function donefunction(){

}

function introducefunction(){

}

//code to skip errors
function pFnumber(){

}

function Enable_Section(){
    if($(this).val() == "Salary Advance" || $(this).val() == "Motor Vehicle Insurance"){
        $('#ApprovalDecisionnew').show();
    }else{
      $('#ApprovalDecisionnew').hide();
  }
    if($(this).val() == "Motor Vehicle Loan"){
        $('#InterviewDate').show();
    }else{
        $('#InterviewDate').hide();
  }
  if($(this).val() == "Motor Vehicle Repair" || $(this).val() == "Motor Vehicle Insurance" || $(this).val() == "Motor Vehicle Loan"){
      $('#frame3').show();
      $('#frame4').show();
      if($(this).val() == "Motor Vehicle Repair"){
          $('#frame5').show();
      }
  }else{
      $('#frame3').hide();
      $('#frame4').hide();
      $('#frame5').hide();
  }
  if($(this).val() == "Tertiary Loan"){
      $('#frame6').show();

  }else{
      $('#frame6').hide();
  }
  if($(this).val() == "Miscellaneous Loan" || $(this).val() == "Computer Loan"){
      $('#frame7').show();

  }else{
      $('#frame7').hide();
  }
  if($(this).val() == "Salary Advance"){
      $('#frame8').show();

  }else{
      $('#frame8').hide();
  }
}
// custom code
$(function(){
    var pfNumber = 'PF-';
    $('#PFNumb.input').keyup(function(e){
        if($(this).val() != ''){  
            var txt = $(this).val();
            $(this).val(pfNumber + txt.replace(pfNumber, ''));
        }
    }).keydown(function(e){
        if($(this).val() == pfNumber){ 
            $(this).val('');
            return false;
        }
    });
});

(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));
  
  $("#PFNumb").inputFilter(function(value) {
    return /^\d*$/.test(value); });

  /*$("#LoanType").change(function(){
      if($(this).val() == "Salary Advance" || $(this).val() == "Motor Vehicle Insurance"){
          $('#ApprovalDecisionnew').show();
      }else{
        $('#ApprovalDecisionnew').hide();
    }
      if($(this).val() == "Motor Vehicle Loan"){
          $('#InterviewDate').show();
      }else{
          $('#InterviewDate').hide();
    }
    if($(this).val() == "Motor Vehicle Repair" || $(this).val() == "Motor Vehicle Insurance" || $(this).val() == "Motor Vehicle Loan"){
        $('#frame3').show();
        $('#frame4').show();
        if($(this).val() == "Motor Vehicle Repair"){
            $('#frame5').show();
        }
    }else{
        $('#frame3').hide();
        $('#frame4').hide();
        $('#frame5').hide();
    }
    if($(this).val() == "Tertiary Loan"){
        $('#frame6').show();

    }else{
        $('#frame6').hide();
    }
    if($(this).val() == "Miscellaneous Loan" || $(this).val() == "Computer Loan"){
        $('#frame7').show();

    }else{
        $('#frame7').hide();
    }
    if($(this).val() == "Salary Advance"){
        $('#frame8').show();

    }else{
        $('#frame8').hide();
    }
    

      

  }); */

// custom code end
function formLoad(){
    if(getWorkItemData("activityName") == "Introduction_WS"){
        setStyle("frame17,visible,false");
        setStyle("frame14,visible,false");
        setStyle("frame16,visible,false");

    }
    //executeServerEvent("TRN","onLostFocus","",true);

 
}

function onRowClick(tableId,rowIndex){
    return true;
}

function customListViewValidation(controlId,flag){
    return true;
}   

function listViewLoad(controlId,action){
    
}

function clickLabelLink(labelId){
    
}

function selectFeatureToBeIncludedInRichText(){
    return {
        'bold' :true,
        'italic':true,
        'underline':true,
        'strikeThrough':true,
        'subscript':true,
        'superscript':true,
        'fontFamily':true,
        'fontSize':true,
        'color':true,
        'inlineStyle':true,
        'inlineClass':true,
        'clearFormatting':true,
        'emoticons':false,
        'fontAwesome':true,
        'specialCharacters':false,
        'paragraphFormat':true,
        'lineHeight':true,
        'paragraphStyle':true,
        'align':true,
        'formatOL':true,
        'formatUL':true,
        'outdent':true,
        'indent':true,
        'quote':true,
        'insertLink':false,
        'insertImage':false,
        'insertVideo':false,
        'insertFile':false,
        'insertTable':true,
        'insertHR':true,
        'selectAll':true,
        'getPDF':false,
        'print':false,
        'help':false,
        'html':false,
        'fullscreen':true,
        'undo':true,
        'redo':true
        
    }
}
