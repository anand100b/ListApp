var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.devicereadyListener.bind(this), false);

        var localStorage = window.localStorage; 
        $("#addTask").click(this.newListListner);  
        $("#delete").click(this.deleteListner);
        $("#delete_completed").click(this.deleteListListner); 
       
    },

   
   
    deleteListListner: function (e) {
        var target = $(e.target);
        if (target.is(":checked")) {
           
            document.getElementById("#delete").disabled = false;
            localStorage.setItem("cbo", 1);
        } else {
            document.getElementById("#delete").disabled = true;
            localStorage.removeItem("#cbo");
        }
        var list = $("#list").html();
        localStorage.setItem("list", list);
    },

    newListListner: function () {

        var userList = $('#inputTask').val();
        if (userList == "") {
            alert("enter the text first");
            return;
        }
        else {
         
            $('#inputTask').val('');
            var newitem = '<table class="table" border="1" border-collapse="collapse"> <tr> <td><input id="cbo" type="checkbox"  name="checkbox-name"/> '
                                                          + userList +
                '<input type="button" value="Delete" disabled="fasle" id="delete" class="w3-btn w3-black" style="float:right"/> </td></tr></table>';
            $('#list').append(newitem);

            var list = $("#list").html();
            localStorage.setItem('list', list);
       
            $('#addTask').addClass("inactivePage");
           
            $('#listPage').removeClass("inactivePage");
        }
    },

    deleteListner: function () {
        var deleterows = $(".table input:checked").parents("tr").remove();
        parents.remove();

        var list = $("#list").html();
        localStorage.setItem("list", list);
        return false;
    },

    

    comboListner: function () {

        $('#cbo').val($(this).is(':checked'));
        if (document.getElementById($('#cbo')).checked) {  
            document.getElementById("delete").disabled = false;    
        } else {
            document.getElementById("delete").disabled = true;
        }
       
    },

    devicereadyListener: function () {
       
        $('#listPage').removeClass("inactivePage");
        if (localStorage.getItem('list')) {
            $('#list').html(localStorage.getItem('list'));
        }
        $('#delete').click(function () {
           
           
            var parent = $(this).parent();
            parent.remove();

            var list = $("#list").html();
        localStorage.setItem("list", list);
        });

        $('#cbo').click(function (e) {
            var target = $(e.target);
            if (target.is(":checked")==true) {
                document.getElementById("delete").disabled = false;
                localStorage.setItem("cbo", 1);
            } else {
                document.getElementById("delete").disabled = true;
                localStorage.removeItem("cbo");
            }
        });

        $(document).on('change', "input[name='checkbox-name']", function (e) {
            if ($(this).prop('checked')==true) {
              $(this).attr('checked', 'checked');
              
            } else {
              $(this).removeAttr('checked');
            }
            var list = $("#list").html();
            localStorage.setItem("list", list);
          });

    },

};

app.initialize();

    

       



