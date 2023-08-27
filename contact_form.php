<?php

/* Template Name: requestdemo */

$siteurl = $_POST["siteurl"]; 
$subject = "Book an Appointment Form of Agelock Cusmotology Treatment";

$thankyouurl = "thankyou.php";
  /*
  if (isset($_POST['submit']))
  {
$radioVal = $_POST["staus"];

if($radioVal == "online")
{
$subject = "Appointment Form of Agelock Darkspot Removal";
$thankyouurl = "thankyou-online.html" ;
}
else if ($radioVal == "offline")
{
	$subject = "Offline Appointment Form of Agelock Darkspot Removal";
	$thankyouurl = "thankyou.html" ;
}
}
*/

$formurl = "index.php" ;
$sorryurl = "sorry.php" ;
$errorurl = "emailerror.php";
//$thankyouurl = "thankyou.html" ;

// $toemail = "contact@agelockskinclinic.in";
// $bccmail = "harish@harvee.co.uk,ponraj@harvee.co.uk,haripragatesh@harvee.co.uk,dhasarathan@harvee.co.uk";

$toemail = "maddie07101999@gmail.com";
//$toemail = "annalsheran@harvee.co.uk";
//$bccmail = "harish@harvee.co.uk";

$fromname = "Book an Appointment";
$regexname   = '/^[a-zA-Z][a-zA-Z\. ]{2,100}$/';
$regexemail   = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/';
$regexphone   = '/^[0-9 \-]{10,20}$/';
$regexmsg   = '/^[a-zA-Z][a-zA-Z\.,()&+ ]{0,250}$/';

	if(!preg_match( $regexname, $_POST["bname"]) || !preg_match( $regexphone, $_POST["bphone"])) { 
		header("Location: " . $sorryurl);
		exit;
	}

$body = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.=w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"></head><body>

<table style=\"padding-top:4px;margin:0em auto;width:600px\"><tbody><tr><td style=\"text-align:center;font-size:14px;padding-left:10px;color:#333;width:150px\">This message was sent from: " . getenv("HTTP_REFERER") . " - [" . $_SERVER['REMOTE_ADDR'] ."]</td></tr></tbody></table>


<table style=\"background:#f5f5f5;border:2px solid #e5e5e5;border-collapse:collapse;padding-top:4px;margin:1.5em auto;width:600px\"><tbody>

<tr><td style=\"border-right:2px solid #e5e5e5;border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:150px\">Name</td><td style=\"border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:450px\">" . $_POST["bname"] . "</td></tr>

<tr><td style=\"border-right:2px solid #e5e5e5;border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:150px\">Phone</td><td style=\"border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:450px\">" . $_POST["bphone"] . "</td></tr>

<tr><td style=\"border-right:2px solid #e5e5e5;border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:150px\">Email</td><td style=\"border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:450px\">" . $_POST["bemail"] . "</td></tr>
<tr><td style=\"border-right:2px solid #e5e5e5;border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:150px\">Service</td><td style=\"border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:450px\">" . $_POST["bservice"] . "</td></tr>



<tr><td style=\"border-right:2px solid #e5e5e5;border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:150px\">Message</td><td style=\"border-bottom:2px solid #e5e5e5;text-align:left;font-size:14px;line-height:33px;padding-left:10px;color:#333;width:450px\">" . $_POST["bmessage"] . "</td></tr>





</tbody></table>
</body></html>";

$replyto = $_POST["email"];
$pname = $_POST["name"];
$finalbody = urlencode($body);

$substr = 'webtag=Theri&toemail='.$toemail.'&fromname='.$fromname."&replyto=".$replyto."&pname=".$pname."&subject=".$subject."&bccmail=".$bccmail."&body=".$finalbody;
$url = "http://35.88.44.130/sendmail?";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $substr);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);  // DO NOT RETURN HTTP HEADERS 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  // RETURN THE CONTENTS OF THE CALL
$return_val = curl_exec($ch);

if($return_val == "success")
{
	
	header("Location: " . $thankyouurl);
	exit;
}

	echo "<script>alert('Please try again later.');</script>";
	exit;

?>



