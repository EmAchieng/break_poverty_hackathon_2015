$(document).ready(function(){
    student_data_url = 'http://127.0.0.1:8081/students';
    $.get(student_data_url, function(students){
    	students.forEach(function(student){ 		
			var studentsTemplate = '<tr>';
				studentsTemplate += '<td>' + student.adm_no + '</td>';
				studentsTemplate += '<td>' + student.name + '</td>';
				studentsTemplate += '<td>' + student.age + '</td>';
				studentsTemplate += '<td>' + student.parent_name + '</td>';
				studentsTemplate += '<td>';
				studentsTemplate += '<form method="post" action="http://127.0.0.1:8081/mark-attendance>';
  				studentsTemplate += '<input type="hidden" name="blue">';
				studentsTemplate += '<input type="radio" name="attendace" value="true">Attended';
				studentsTemplate += '<input type="radio" name="attendace" value="false">Absent';
				studentsTemplate += '<input type="hidden" name="adm_no" value="'+ student.adm_no +'">';
				studentsTemplate += '<input type="submit" value="Mark attendace">';
				studentsTemplate += '</form>';
				studentsTemplate += '</td>';
				studentsTemplate += '</tr>';

			console.log(studentsTemplate);


	    	$('#student-records').append(studentsTemplate);
    	})
    });
});



	