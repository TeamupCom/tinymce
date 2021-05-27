# README

This is a customized version of the TinyMCE editor.

Instructions to update TinyMCE to the lastest:

1. Ensure you have upstream pointing to the tinymce Github repo.

   > git remote -v
   > git remote add upstream https://github.com/tinymce/tinymce.git

2. Fetch the latest from upstream

3. Merge upstream master into the origin master and choose the "fast-forward" option.

4. At the head of the origin master add a new branch "teamup-customizations-{version}",
   where _version_ is the last version of the master branch. For example, "teamup-customizations-5.8.1".

5. Apply our modifications to TinyMCE step by step to the feature branch. We cannot just rebased our
   past changes because some of the changes need to be updated. For example, we need to fetch the
   latest version of the language files, etc.

6. Install dependencies:

   > npm install

7. Build:

   > yarn tinymce-grunt

8. Build custom version for Teamup

   > gulp tinymce:minify

9. Commit all changes

10. In repo TeamupCom/teamup:
    - File package.json: Update dependeny on tinymce to the latest commit.

9. Update dependency of Teamup Calendar on tinymce
   > npm update tinymce
   > npm shrinkwrap
   Then commit changes.

10. Build Teamup Calendar with latest TinyMCE instance
    > composer publish

11. Inform other users to update to dependency on tinymce:
    > npm install tinymce

Useful
---------------------------------------
1. Create or update editor icon
  > https://www.tiny.cloud/docs/advanced/creating-an-icon-pack/

2. Create new plugin:
  > https://www.tiny.cloud/docs/advanced/creating-a-plugin/

3. Download languages
  > https://www.tiny.cloud/get-tiny/language-packages/
