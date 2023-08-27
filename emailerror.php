<?php include "include/header.php"; ?>
<?php include "include/menu.php"; ?>
<section style="background-color: #000;text-align: center;">
  <div class="pages-text" style="display:flex;width:100%;margin:140px 0px 40px 0;height:450px;justify-content: center;align-items: center;">
    <div class="wappear">   
      <h2>Email Error</h2>
      <div class="content">
        <p>Please go back and fill in all fields of the form before submitting.</p>  
      </div>      
      <p>
        <a href="javascript:history.go(-1)" title="Go Back">
          <button class="btn mx-auto" type="button">
            <strong>Go Back</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>              
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>   
        </a>
      </p>
    </div>
  </div>
</section>
<?php include "include/footer.php"; ?>  

</body>

</html>